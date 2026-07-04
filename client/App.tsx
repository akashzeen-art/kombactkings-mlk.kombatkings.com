import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArmWrestling from "./pages/ArmWrestling";
import SlapFight from "./pages/SlapFight";
import MMAFight from "./pages/MMAFight";
import Taekwondo from "./pages/Taekwondo";
import Kickboxing from "./pages/Kickboxing";
import MyAccount from "./pages/MyAccount";
import Callback from "./pages/Callback";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/arm-wrestling" element={<ArmWrestling />} />
              <Route path="/slap-fight" element={<SlapFight />} />
              <Route path="/mma-fight" element={<MMAFight />} />
              <Route path="/taekwondo" element={<Taekwondo />} />
              <Route path="/kickboxing" element={<Kickboxing />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/callback" element={<Callback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
