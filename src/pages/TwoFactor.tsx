import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

const TwoFactor = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to Identity Verification after 2FA
    navigate("/verification");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">
      <header className="py-6 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate("/register")}
          className="rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 text-center -mt-12">
            <img src="/logo.png" alt="TinDelas" className="h-8 w-auto mx-auto mb-6" />
            <h1 className="text-4xl font-black text-brand-black tracking-tight">Verificação em 2 etapas</h1>
            <p className="text-xl text-slate-500 mt-2 font-medium px-4">Enviamos um código de 6 dígitos para o seu e-mail.</p>
          </div>

          <div className="p-8 border-2 border-slate-100 rounded-[32px] shadow-sm bg-white">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2 text-center">
                <Label htmlFor="code" className="text-slate-900">Código de Acesso</Label>
                <Input 
                  id="code" 
                  placeholder="000000" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={6}
                  className="h-16 text-center text-3xl font-black tracking-widest rounded-xl"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
                Verificar
              </Button>
              
              <button type="button" className="w-full text-sm font-bold text-brand-red py-2 hover:underline transition-all">
                Não recebi o código
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TwoFactor;
