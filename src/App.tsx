import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Official from "./pages/Official";
import Visitor from "./pages/Visitor";
import SocialWelfare from "./pages/SocialWelfare";
import HealthServices from "./pages/HealthServices";
import EducationSupport from "./pages/EducationSupport";
import GovernanceTransparency from "./pages/GovernanceTransparency";
import Environment from "./pages/Environment";
import PublicWorks from "./pages/PublicWorks";
import PeaceOrder from "./pages/PeaceOrder";
import AgricultureFishery from "./pages/AgricultureFishery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resident" element={<Index />} />
          <Route path="/official" element={<Official />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/social-welfare" element={<SocialWelfare />} />
          <Route path="/health-services" element={<HealthServices />} />
          <Route path="/education-support" element={<EducationSupport />} />
          <Route path="/governance-transparency" element={<GovernanceTransparency />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/public-works" element={<PublicWorks />} />
          <Route path="/peace-order" element={<PeaceOrder />} />
          <Route path="/agriculture-fishery" element={<AgricultureFishery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
