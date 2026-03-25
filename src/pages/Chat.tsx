import { conversations } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import AppHeader from "@/components/AppHeader";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col pb-20">
      <AppHeader title="mensagens" />

      <div className="flex-1">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => navigate(`/chat/${conv.id}`)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50 active:bg-slate-50"
          >
            <img
              src={conv.profile.photos[0]}
              alt={conv.profile.name}
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  {conv.profile.name}
                </h3>
                <span className="text-[11px] text-muted-foreground">
                  {formatDistanceToNow(conv.lastMessageTime, {
                    addSuffix: false,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {conv.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chat;
