
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";

export default function Auth() {
  const { isSignUp, setIsSignUp, handleAuth } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-buckazoid-navy">
              {isSignUp ? "Admin Registration" : "Admin Login"}
            </h1>
            <p className="text-gray-600 mt-2">
              {isSignUp
                ? "Use the admin registration code to create an admin account"
                : "Login to access admin dashboard"}
            </p>
            {isSignUp && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4" role="alert">
                <p className="font-bold">First Time Admin Setup</p>
                <p>For your first admin account, use the code: ADMIN123456</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <AuthForm isSignUp={isSignUp} onSubmit={handleAuth} />
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-gray-600 hover:underline"
              >
                {isSignUp
                  ? "Already have an admin account? Login"
                  : "Need to create an admin account? Register"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
