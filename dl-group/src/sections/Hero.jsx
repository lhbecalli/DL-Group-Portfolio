import { motion } from "framer-motion";

import dlMonogram from "../assets/dl-monogram-removebg-preview.png";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.img 
            src={dlMonogram}
            alt="DL Monogram"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 md:w-64 mb-8 drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]" 
        />

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
            Inovação que <span className="text-blue-500 text-glow">Escala</span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed"
        >
            Transformando operações complexas em fluxos modernos com Inteligência Artificial e tecnologia de ponta.
        </motion.p>
      </div>
    </section>
  );
}