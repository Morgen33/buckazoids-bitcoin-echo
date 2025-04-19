
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminRegistrationCodes from "@/components/admin/AdminRegistrationCodes";
import ContactSubmissions from "@/components/admin/ContactSubmissions";

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <ContactSubmissions />
          <AdminRegistrationCodes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
