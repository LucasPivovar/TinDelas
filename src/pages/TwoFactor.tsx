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
          <div className="mb-10 text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h1 className="text-3xl font-black text-brand-black tracking-tight">Verificação em Duas Etapas</h1>
            <p className="text-slate-500 mt-2 font-medium">Enviamos um código de 6 dígitos para o seu e-mail.</p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2 text-center">
              <Label htmlFor="code">Código de Acesso</Label>
              <Input 
                id="code" 
                placeholder="000000" 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={6}
                className="h-16 text-center text-3xl font-black tracking-widest border-slate-200 focus:border-brand-red focus:ring-brand-red rounded-xl"
                required
              />
            </div>

            <Button type="submit" className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
              Verificar
            </Button>
            
            <button type="button" className="w-full text-sm font-bold text-brand-red py-2">
              Não recebi o código
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default TwoFactor;
