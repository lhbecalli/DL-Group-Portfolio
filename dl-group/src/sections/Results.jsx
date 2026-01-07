import { motion, useMotionValue, useSpring, useMotionTemplate, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

/**
 * Componente Analítico Senior
 * Focado em visualização de ROI e Impacto Financeiro
 */
const MetricCard = ({ type }) => {
  const isUp = type === "up";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  
  // Interatividade Senior: Spotlight que segue o mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colorHex = isUp ? "#3b82f6" : "#ef4444";
  const pathData = isUp 
    ? "M 10 80 C 40 70 70 40 130 10" 
    : "M 10 10 C 40 20 70 50 130 80";

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-px rounded-[2.5rem] bg-white/10 overflow-hidden"
      aria-label={isUp ? "Gráfico de aumento de lucros" : "Gráfico de redução de custos"}
    >
      {/* Efeito Spotlight Dinâmico */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${isUp ? 'rgba(59, 130, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)'}, transparent 80%)
          `
        }}
      />

      <div className="relative bg-slate-950/90 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 h-full border border-white/5">
        <header className="flex justify-between items-start mb-10">
          <div>
            <div className={`flex items-center gap-2 mb-3 ${isUp ? 'text-blue-400' : 'text-red-400'}`}>
              {isUp ? <Zap size={18} /> : <ShieldCheck size={18} />}
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Business Intelligence</span>
            </div>
            <h3 className="text-white text-2xl md:text-4xl font-bold tracking-tighter">
              {isUp ? "Escalabilidade de Lucro" : "Redução de Custos"}
            </h3>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-white transition-colors">
             <ArrowUpRight size={20} />
          </div>
        </header>

        {/* Área Técnica do Gráfico */}
        <div className="relative w-full h-44 mt-8 bg-slate-900/20 rounded-2xl border border-white/5 overflow-hidden">
          {/* Grid de Precisão (SEO: Decorativo) */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-[0.05] pointer-events-none">
            {[...Array(32)].map((_, i) => <div key={i} className="border-[0.5px] border-white" />)}
          </div>

          <svg viewBox="0 0 140 90" className="w-full h-full overflow-visible relative z-10 px-4">
            <defs>
              <linearGradient id={`grad-${type}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorHex} stopOpacity="0.4" />
                <stop offset="100%" stopColor={colorHex} stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.path
              d={`${pathData} L 130 90 L 10 90 Z`}
              fill={`url(#grad-${type})`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
            />

            <motion.path
              d={pathData}
              fill="none"
              stroke={colorHex}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>
        </div>

        <footer className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-sm">
        </footer>
      </div>
    </motion.article>
  );
};

export default function Results() {
  return (
    <section id="produtos" className="py-32 bg-slate-950 relative overflow-hidden scroll-mt-24">
      {/* Luzes de ambiência otimizadas */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SEO Header: Focado em Conversão e Autoridade */}
        <header className="mb-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center md:justify-start mb-6"
          >
            <div className="w-12 h-[1px] bg-blue-500/50" />
            <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px]">ROI & Automação</span>
          </motion.div>
          <h2 className="text-white text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
            Resultados que <br /> se <span className="text-slate-500">manifestam.</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Não entregamos apenas produtos. Geramos eficiência financeira através de arquiteturas inteligentes e automação de processos.
          </p>
        </header>

        {/* Grid de Impacto Financeiro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
          <MetricCard type="up" />
          <MetricCard type="down" />
        </div>

        {/* Showcase de Produtos: SEO Otimizado com Títulos Semânticos */}
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
            <h3 className="text-white text-4xl font-bold tracking-tight">Ecosistema de <span className="text-slate-500">Soluções</span></h3>
            <p className="text-slate-400 max-w-sm text-sm">Sistemas projetados para integração total com workflows de inteligência artificial.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Produto 1: DL Automate Pro */}
            <motion.article 
              whileHover={{ y: -10 }}
              className="group relative h-[520px] rounded-[3rem] overflow-hidden bg-slate-900/30 border border-white/5 transition-all duration-700 hover:border-blue-500/30 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=1000" 
                alt="Interface do DL Automate Pro mostrando gestão de leads e automação de CRM"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                <span className="bg-blue-600/20 backdrop-blur-md text-blue-400 text-[10px] px-4 py-1.5 rounded-full uppercase font-bold mb-6 inline-block border border-blue-500/20">SaaS Platform</span>
                <h4 className="text-4xl font-bold text-white mb-4">DL Automate Pro</h4>
                <p className="text-slate-400 text-base leading-relaxed max-w-xs mb-8">Gestão de leads inteligente com fluxos autônomos integrados ao n8n.</p>
                <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn border-b border-white/20 pb-2 hover:border-white transition-all">
                  Explorar Tecnologia <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>

            {/* Produto 2: Workflow Builder */}
            <motion.article 
              whileHover={{ y: -10 }}
              className="group relative h-[520px] rounded-[3rem] overflow-hidden bg-slate-900/30 border border-white/5 transition-all duration-700 hover:border-purple-500/30 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                alt="Visualização de fluxos lógicos e arquitetura de software"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                <span className="bg-purple-600/20 backdrop-blur-md text-purple-400 text-[10px] px-4 py-1.5 rounded-full uppercase font-bold mb-6 inline-block border border-purple-500/20">Enterprise AI</span>
                <h4 className="text-4xl font-bold text-white mb-4">Workflow Builder</h4>
                <p className="text-slate-400 text-base leading-relaxed max-w-xs mb-8">Arquitetura de alta performance para automação de tarefas corporativas complexas.</p>
                <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn border-b border-white/20 pb-2 hover:border-white transition-all">
                  Explorar Tecnologia <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}