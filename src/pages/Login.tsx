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
          <div className="mb-8 text-center -mt-12">
            <img src="/logo.png" alt="TinDelas" className="h-8 w-auto mx-auto mb-6" />
            <h1 className="text-4xl font-black text-brand-black tracking-tight">Bem-vinda de volta</h1>
            <p className="text-xl text-slate-500 mt-2 font-medium px-4">Entre na sua conta para continuar</p>
          </div>

          <div className="p-8 border-2 border-slate-100 rounded-[32px] shadow-sm bg-white">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link to="/forgot-password" title="Recuperar senha" className="text-xs font-bold text-brand-red hover:underline transition-all">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
                Entrar
              </Button>
            </form>
          </div>

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
