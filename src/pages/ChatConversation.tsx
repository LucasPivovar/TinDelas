import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { conversations } from "@/data/mockData";
import { ArrowLeft, Send } from "lucide-react";
import { Message } from "@/data/mockData";
import { format } from "date-fns";
import { motion } from "framer-motion";

const ChatConversation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const conversation = conversations.find((c) => c.id === id);
  const [messages, setMessages] = useState<Message[]>(
    conversation?.messages || []
  );
  const [input, setInput] = useState("");

  if (!conversation) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: `m${Date.now()}`,
      senderId: "me",
      text: input.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="mx-auto flex h-dvh max-w-lg flex-col bg-background">
      {/* Header with Back Button */}
      <div className="flex items-center gap-2 border-b border-border/50 px-3 py-3 bg-background/80 backdrop-blur-md sticky top-0 z-10 w-full">
        <button
          onClick={() => navigate("/chat")}
          className="p-2 transition-transform active:scale-95 text-foreground"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src={conversation.profile.photos[0]}
            alt={conversation.profile.name}
            className="h-10 w-10 rounded-full object-cover border border-brand-pink/10 shadow-sm"
          />
          <div>
            <h2 className="text-sm font-bold text-foreground leading-tight">
              {conversation.profile.name}
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] font-medium text-muted-foreground">Online agora</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {messages.map((msg) => {
            const isMe = msg.senderId === "me";
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                key={msg.id}
                className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-[22px] px-4 py-2.5 text-sm shadow-sm ${
                    isMe
                      ? "bg-brand-lilac text-white rounded-br-none"
                      : "bg-secondary text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1.5 px-2 text-[10px] text-muted-foreground/60 font-medium">
                  {format(new Date(msg.timestamp), "HH:mm")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-border/50 px-4 py-4 bg-background">
        <div className="flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-full bg-brand-lilac/90 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-brand-lilac/20 transition-all shadow-inner"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-pink text-white shadow-lg shadow-brand-pink/20 transition-all active:scale-95 disabled:opacity-40"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
