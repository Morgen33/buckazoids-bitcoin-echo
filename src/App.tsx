
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/News";
import Contact from "./pages/Contact";
import ContactUs from "./pages/ContactUs";
import CommunityPage from "./pages/Community";
import Buy from "./pages/Buy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <BrowserRouter>
          <AnalyticsProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnalyticsProvider>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
