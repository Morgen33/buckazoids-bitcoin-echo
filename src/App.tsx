
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/News";
import Contact from "./pages/Contact";
import ContactUs from "./pages/ContactUs";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import AdminGuard from "./components/AdminGuard";
import CommunityPage from "./pages/Community";
import Buy from "./pages/Buy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/buy" element={<Buy />} />
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <Admin />
              </AdminGuard>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
