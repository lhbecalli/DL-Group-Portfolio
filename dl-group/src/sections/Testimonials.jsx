import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "CEO na TechFlow",
    content: "A automação com n8n desenvolvida pela DL Group reduziu nosso tempo de resposta em 60%. Incrível!",
  },
  {
    name: "Ana Oliveira",
    role: "Gerente de Operações",
    content: "O sistema web que entregaram é extremamente rápido e intuitivo. Superou nossas expectativas.",
  },
  {
    name: "Marcos Vinte",
    role: "Founder da StartUp X",
    content: "Profissionalismo e visão técnica de alto nível. São nossos parceiros oficiais agora.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Quote className="text-blue-500 mx-auto mb-4 opacity-50" size={40} />
          <h2 className="text-4xl font-bold text-white">O que dizem nossos <span className="text-blue-500">parceiros</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <p className="text-slate-400 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-blue-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}