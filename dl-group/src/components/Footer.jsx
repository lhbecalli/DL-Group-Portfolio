import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import dlGroupLogo from "../assets/dl-group-logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer id="contato" className="pt-24 pb-12 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12 mb-20">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Bora criar algo <br /> <span className="text-blue-500">lendário?</span>
            </h2>
            <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all mx-auto">
              Iniciar Projeto <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6">
             <img src={dlGroupLogo} alt="DL Group" className="h-12 opacity-80" />
             <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white transition-all group">
                  <Instagram size={20} className="group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="#" className="p-3 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white transition-all group">
                  <Linkedin size={20} className="group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="mailto:contato@dlgroup.com" className="p-3 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white transition-all group">
                  <Mail size={20} className="group-hover:text-blue-500 transition-colors" />
                </a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 DL GROUP. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em performance e automação.</p>
        </div>
      </div>
    </footer>
  );
}