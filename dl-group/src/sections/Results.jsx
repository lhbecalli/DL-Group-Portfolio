import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2; // Duração da animação em segundos
      let timer = setInterval(() => {
        start += Math.ceil(end / 60);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}+
      </div>
      <div className="text-blue-400 font-medium uppercase tracking-widest text-sm">
        {title}
      </div>
    </div>
  );
};

export default function Results() {
  return (
    <section 
      id="produtos" 
      className="py-24 bg-slate-950/50 relative overflow-hidden scroll-mt-24"
    >
      {/* Luz de fundo estratégica para profundidade */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid de Contadores Animados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          <Counter value="50" title="Projetos n8n" />
          <Counter value="30" title="Sistemas Web" />
          <Counter value="15" title="SaaS Ativos" />
          <Counter value="100" title="Horas de Automação" />
        </div>

        {/* Showcase de Produtos/Projetos */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white">
            Produtos <span className="text-blue-500">Destaque</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Produto 1: Exemplo SaaS */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Dashboard SaaS"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="bg-blue-600 text-[10px] px-3 py-1 rounded-full uppercase font-bold text-white mb-4 inline-block">SaaS</span>
                <h3 className="text-2xl font-bold text-white mb-2">DL Automate Pro</h3>
                <p className="text-slate-300 text-sm">Gestão completa de leads e automação de CRM integrada ao n8n.</p>
              </div>
            </motion.div>

            {/* Produto 2: Exemplo Automação */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="n8n Workflows"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="bg-purple-600 text-[10px] px-3 py-1 rounded-full uppercase font-bold text-white mb-4 inline-block">Automação</span>
                <h3 className="text-2xl font-bold text-white mb-2">Workflow Builder</h3>
                <p className="text-slate-300 text-sm">Visualização de dados em tempo real para operações complexas.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}