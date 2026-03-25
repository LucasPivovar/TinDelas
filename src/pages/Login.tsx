import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">
      <header className="py-6 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate("/")}
          className="rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10 text-center">
            <img src="/logo.png" alt="TinDelas" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-3xl font-black text-brand-black tracking-tight">Bem-vinda de volta</h1>
            <p className="text-slate-500 mt-2 font-medium">Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-slate-200 focus:border-brand-red focus:ring-brand-red rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <button type="button" className="text-xs font-bold text-brand-red">Esqueceu a senha?</button>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-slate-200 focus:border-brand-red focus:ring-brand-red rounded-xl"
                required
              />
            </div>

            <Button type="submit" className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
              Entrar
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500 font-medium">
            Não tem uma conta?{" "}
            <Link to="/register" className="text-brand-red font-bold underline">
              Cadastre-se agora
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
