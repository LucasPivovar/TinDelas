import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Heart, 
  Smartphone, 
  Shield, 
  Star, 
  Zap, 
  Download,
  CheckCircle2,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-pink selection:text-white overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-24 md:w-32">
              <img src="/logo.png" alt="TinDelas Logo" className="w-full h-auto object-contain" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-brand-pink transition-colors">Sobre</a>
            <a href="#funcionalidades" className="text-sm font-medium hover:text-brand-pink transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-brand-pink transition-colors">Como Funciona</a>
            <a href="#faq" className="text-sm font-medium hover:text-brand-pink transition-colors">FAQ</a>
          </div>
          <Link to="/app">
            <Button className="rounded-full bg-gradient-brand hover:opacity-90 transition-opacity">
              Entrar no App
            </Button>
          </Link>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="text-center md:text-left"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Conecte-se de forma <span className="bg-gradient-brand bg-clip-text text-transparent">simples</span>, rápida e segura.
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Descubra uma nova forma de conhecer pessoas através de uma experiência moderna e intuitiva exclusiva para mulheres.
              </motion.p>
              <div className="flex flex-row gap-4 justify-center md:justify-start">
                <Button className="h-14 px-4 sm:h-16 sm:px-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 sm:gap-4 transition-all active:scale-95 shadow-2xl shadow-slate-900/20 shrink-0">
                  <img src="/apple.svg" alt="Apple Store" className="h-6 w-6 sm:h-7 sm:w-7 invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-[12px] uppercase font-bold tracking-tight opacity-70">Download on the</div>
                    <div className="text-sm sm:text-lg font-bold leading-tight">App Store</div>
                  </div>
                </Button>
                <Button className="h-14 px-4 sm:h-16 sm:px-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 sm:gap-4 transition-all active:scale-95 shadow-2xl shadow-slate-900/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" viewBox="0 0 466 511.98">
                    <path fill="#EA4335" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
                    <path fill="#FBBC04" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
                    <path fill="#34A853" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
                    <path fill="#4285F4" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-[12px] uppercase font-bold tracking-tight opacity-70">Get it on</div>
                    <div className="text-sm sm:text-lg font-bold leading-tight">Google Play</div>
                  </div>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="App Preview" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-10 left-0 right-0 px-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-brand-pink p-2 rounded-full">
                      <Heart className="h-4 w-4 fill-current" />
                    </div>
                    <span className="font-semibold text-lg">It's a Match!</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 hidden md:block animate-float">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">Perfil Verificado</div>
                    <div className="text-slate-500 text-xs">Acesso seguro garantido</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Sobre o App */}
      <section id="sobre" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, type: "spring", stiffness: 60, damping: 20 }}
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 italic">
                O que é o <span className="bg-gradient-brand bg-clip-text text-transparent">TinDelas</span>?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                O TinDelas foi criado para facilitar conexões reais através de uma experiência digital simples e intuitiva. A plataforma reúne mulheres com interesses em comum e oferece ferramentas para tornar cada interação mais segura e significativa.
              </p>
            </motion.div>
        </div>
      </section>

      {/* 3. Funcionalidades */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o TinDelas?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Match Inteligente",
                desc: "Algoritmo que sugere conexões com base em interesses e preferências.",
                icon: Star,
                color: "bg-amber-100 text-amber-600"
              },
              {
                title: "Interface Simples",
                desc: "Design moderno que torna a navegação rápida e intuitiva.",
                icon: Smartphone,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Segurança e Privacidade",
                desc: "Ferramentas para garantir uma experiência segura para todas as usuárias.",
                icon: Shield,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "Conexões Reais",
                desc: "Conheça mulheres próximas e com interesses semelhantes.",
                icon: Heart,
                color: "bg-brand-pink/20 text-brand-pink"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8, 
                    delay: i * 0.1, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20 
                  } 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)"
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut" 
                }}
                className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Como Funciona */}
      <section id="como-funciona" className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-pink rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Como Funciona</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Crie seu perfil", desc: "Cadastre-se rapidamente e personalize seu perfil." },
              { step: "02", title: "Explore conexões", desc: "Descubra mulheres com interesses em comum." },
              { step: "03", title: "Faça match", desc: "Quando duas pessoas demonstram interesse, acontece o match." },
              { step: "04", title: "Comece a conversar", desc: "Inicie conversas e crie novas conexões." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 18
                }}
              >
                <div className="text-7xl font-black text-[#FFC8E0] mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-pink">{item.title}</h3>
                <p className="text-slate-400 text-sm max-w-[250px] mx-auto">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-[60%] -right-6 -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Depoimentos */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Feedback de quem usa</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Ana S.", feedback: "Experiência incrível! Interface simples e pessoas realmente interessantes." },
              { name: "Juliana M.", feedback: "Finalmente um aplicativo que realmente facilita conexões entre mulheres." },
              { name: "Mariana R.", feedback: "Design bonito e muito fácil de usar. Me sinto segura na plataforma." }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8, 
                    delay: i * 0.15, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20 
                  } 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -4px rgb(0 0 0 / 0.15)"
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut" 
                }}
                className="w-full md:w-[350px] p-8 rounded-2xl bg-brand-soft border border-brand-pink/30 cursor-default"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">“{testi.feedback}”</p>
                <div className="font-bold text-slate-900">— {testi.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Plataformas */}
      <section className="py-20 bg-gradient-brand text-white overflow-hidden relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Baixe agora e comece a usar</h2>
            <p className="text-xl opacity-90 mb-12">
              A sua próxima conexão pode estar a um deslize de distância. Disponível para iOS e Android.
            </p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Button className="h-14 px-4 sm:h-16 sm:px-10 rounded-full bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-2 sm:gap-4 transition-colors shrink-0">
                <img src="/apple.svg" alt="Apple Store" className="h-6 w-6 sm:h-8 sm:w-8" />
                <div className="text-left">
                  <div className="text-[8px] sm:text-[10px] uppercase font-bold tracking-tight opacity-70">Download on the</div>
                  <div className="text-sm sm:text-lg font-bold">App Store</div>
                </div>
              </Button>
              <Button className="h-14 px-4 sm:h-16 sm:px-10 rounded-full bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-2 sm:gap-4 transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" viewBox="0 0 466 511.98">
                  <path fill="#EA4335" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
                  <path fill="#FBBC04" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
                  <path fill="#34A853" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
                  <path fill="#4285F4" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] sm:text-[10px] uppercase font-bold tracking-tight opacity-70">Get it on</div>
                  <div className="text-sm sm:text-lg font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold italic">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "O aplicativo é gratuito?", a: "Sim, o download e o uso básico são gratuitos." },
              { q: "O app está disponível para Android e iOS?", a: "Sim, você pode baixar nas duas plataformas." },
              { q: "Como funciona o sistema de match?", a: "O match acontece quando duas usuárias demonstram interesse mútuo." },
              { q: "Meus dados são seguros?", a: "Sim, o aplicativo possui sistemas avançados de proteção e privacidade." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-100">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-brand-pink transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Call to Action final */}
      <section className="py-24 bg-brand-soft text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", stiffness: 60, damping: 20 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Pronta para começar?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Baixe agora o aplicativo e descubra uma nova forma de se conectar.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/app">
                <Button className="h-16 px-12 rounded-full bg-gradient-brand text-white text-xl font-bold shadow-lg shadow-brand-pink/20 transition-opacity hover:opacity-90 flex items-center gap-3">
                  <Download className="h-6 w-6" />
                  Baixar Agora
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Rodapé */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-24">
                  <img src="/logo.png" alt="TinDelas Logo" className="w-full h-auto object-contain" />
                </div>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 font-medium">
                Uma plataforma inspirada no conceito do Tinder, porém exclusiva para mulheres. Um espaço digital voltado para conexão, segurança e pertencimento.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-brand-soft transition-colors text-slate-400 hover:text-brand-pink">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-brand-soft transition-colors text-slate-400 hover:text-brand-pink">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-brand-soft transition-colors text-slate-400 hover:text-brand-pink">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#sobre" className="text-slate-500 hover:text-brand-pink transition-colors">Sobre Nós</a></li>
                <li><a href="#funcionalidades" className="text-slate-500 hover:text-brand-pink transition-colors">Funcionalidades</a></li>
                <li><Link to="/app" className="text-slate-500 hover:text-brand-pink transition-colors">Entrar no App</Link></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Apoio</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Suporte</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4 text-slate-400 text-sm">
            <p>© 2026 TinDelas. Todos os direitos reservados.</p>
            <p>Conectando mulheres com segurança e carinho.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
