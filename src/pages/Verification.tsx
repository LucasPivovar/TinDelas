import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Camera, Upload, CheckCircle2 } from "lucide-react";

const Verification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [cpf, setCpf] = useState("");
  const [dob, setDob] = useState("");

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/app");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">
      <header className="py-6 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => step > 1 ? setStep(step - 1) : navigate("/2fa")}
          className="rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="text-sm font-bold text-slate-400">Passo {step} de 3</div>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full pb-20">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl font-black text-brand-black tracking-tight mb-2">Dados Pessoais</h1>
              <p className="text-slate-500 mb-8 font-medium">Precisamos validar sua identidade para garantir a segurança de todas.</p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input 
                    id="cpf" 
                    placeholder="000.000.000-00" 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="h-12 border-slate-200 focus:border-brand-red focus:ring-brand-red rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Data de Nascimento</Label>
                  <Input 
                    id="dob" 
                    type="date" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="h-12 border-slate-200 focus:border-brand-red focus:ring-brand-red rounded-xl"
                    required
                  />
                </div>
                <Button onClick={handleNext} className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
                  Avançar
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-3xl font-black text-brand-black tracking-tight mb-2">Verificação Facial</h1>
              <p className="text-slate-500 mb-8 font-medium">Tire uma selfie segurando um documento de identidade.</p>

              <div className="aspect-square bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center mb-8 relative overflow-hidden group hover:border-brand-red transition-colors cursor-pointer">
                <Camera className="h-12 w-12 text-slate-300 group-hover:text-brand-red mb-4 transition-colors" />
                <span className="text-sm font-bold text-slate-400 group-hover:text-brand-red transition-colors">Abrir Câmera</span>
              </div>

              <div className="flex flex-col gap-4">
                <Button onClick={handleNext} className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
                  Capturar Selfie
                </Button>
                <Button variant="ghost" className="text-slate-500 flex items-center justify-center gap-2">
                  <Upload className="h-4 w-4" />
                  Fazer upload do arquivo
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-black text-brand-black tracking-tight mb-2">Tudo pronto!</h1>
              <p className="text-slate-500 mb-10 font-medium">Seus documentos foram enviados para análise. Você já pode explorar o app enquanto validamos.</p>

              <Button onClick={() => navigate("/app")} className="w-full h-14 bg-brand-red hover:bg-black text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all">
                Ir para o App
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Verification;
