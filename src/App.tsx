import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Feed from "./pages/Feed";
import SurpriseMatch from "./pages/SurpriseMatch";
import Chat from "./pages/Chat";
import ChatConversation from "./pages/ChatConversation";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import TabBar from "./components/TabBar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Feed />} />
        <Route path="/surprise" element={<SurpriseMatch />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatConversation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isLanding && <TabBar />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
