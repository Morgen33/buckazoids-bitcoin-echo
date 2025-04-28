
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const receiverEmail = "timeripper59@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, captchaToken }: ContactRequest = await req.json();
    
    // Verify the captcha token
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${recaptchaSecret}&response=${captchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to the receiver
    const emailResponse = await resend.emails.send({
      from: "Buckazoids Contact <onboarding@resend.dev>",
      to: [receiverEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Buckazoids <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Buckazoids",
      html: `
        <h1>Thank you for contacting us!</h1>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Buckazoids Team</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
