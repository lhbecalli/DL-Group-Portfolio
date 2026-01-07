import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dlGroupLogo from "../assets/dl-group-logo-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const navLinks = [
    { name: "Início", id: "home" },
    { name: "Serviços", id: "servicos" },
    { name: "Eficiência", id: "produtos" },
    // NOVO LINK ADICIONADO:
    { name: "Clientes", id: "depoimentos" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset de 100 para compensar a barra flutuante e o respiro do design
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] z-[100] max-w-7xl">
      <div className="flex items-center justify-between w-full h-16 md:h-20 px-6 md:px-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl relative">
        
        {/* LOGO POP-OUT */}
        <div className="relative h-full flex items-center">
          <img 
            src={dlGroupLogo} 
            alt="DL Group" 
            className="h-24 md:h-32 w-auto cursor-pointer object-contain transition-transform hover:scale-110 active:scale-95 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            onClick={(e) => scrollToSection(e, "contato")}
          />
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onMouseEnter={() => setHoveredPath(link.id)}
              onMouseLeave={() => setHoveredPath(null)}
              onClick={(e) => scrollToSection(e, link.id)}
              className="relative text-base font-semibold text-slate-300 hover:text-white transition-colors py-2"
            >
              {link.name}
              
              {hoveredPath === link.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
          
          <button className="ml-4 px-8 py-2 bg-blue-600 rounded-full text-white font-bold text-3x1 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Contato
          </button>
        </div>

        {/* Menu Mobile Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-24 left-0 right-0 bg-slate-900/98 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6 md:hidden z-[101] shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className="text-xl text-slate-300 font-semibold border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-blue-600 rounded-2xl text-white font-bold text-lg">
              Iniciar Projeto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}