import { Flame, Gift, MessageCircle, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { path: "/app", icon: Flame, label: "Feed" },
  { path: "/surprise", icon: Gift, label: "Surpresa" },
  { path: "/chat", icon: MessageCircle, label: "Chat" },
  { path: "/profile", icon: User, label: "Perfil" },
];

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide tab bar when on landing page or inside a conversation
  if (location.pathname === "/" || location.pathname.startsWith("/chat/")) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {tabs.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-0.5 px-6 py-1.5 transition-colors"
            >
              <Icon
                className="h-6 w-6 transition-colors"
                strokeWidth={active ? 2.5 : 1.5}
                style={{ color: active ? "#FF0000" : "hsl(var(--muted-foreground))" }}
              />
              <span
                className="text-[10px] font-bold transition-colors"
                style={{ color: active ? "#FF0000" : "hsl(var(--muted-foreground))" }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
