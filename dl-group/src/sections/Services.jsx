import { motion } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";

const services = [
  {
    title: "Automação com N8N",
    description: "Conectamos suas ferramentas e criamos fluxos inteligentes que trabalham por você 24/7.",
    icon: Zap,
    className: "md:col-span-2 bg-gradient-to-br from-blue-600/20 to-transparent",
  },
  {
    title: "Desenvolvimento Web",
    description: "Sites de alta performance com design do seu estilo, trazendo modernidade tecnólogica a sua empresa.",
    icon: Globe,
    className: "md:col-span-1 bg-slate-900/50",
  },
  {
    title: "Sistemas de Software",
    description: "Arquiteturas escaláveis para negócios que não podem parar.",
    icon: Cpu,
    className: "md:col-span-3 bg-slate-900/50",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Nossas <span className="text-blue-500">Especialidades</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group ${service.className}`}
          >
            <service.icon className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
<section id="servicos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24"></section>
}
