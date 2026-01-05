import { motion } from "framer-motion";
import dlGroupLogo from "../assets/dl-group-logo-removebg-preview.png";

export default function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compensação da altura da navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-8 py-4 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl pointer-events-auto">
        <img 
            src={dlGroupLogo} 
            alt="DL Group Logo" 
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={(e) => scrollToSection(e, "home")}
        />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-white transition-colors">Início</a>
          <a href="#servicos" onClick={(e) => scrollToSection(e, "servicos")} className="hover:text-white transition-colors">Serviços</a>
          <a href="#produtos" onClick={(e) => scrollToSection(e, "produtos")} className="hover:text-white transition-colors">Produtos</a>
          <button 
            onClick={(e) => scrollToSection(e, "contato")}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Contato
          </button>
        </div>
      </div>
    </motion.nav>
  );
}