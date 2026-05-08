"use client";
import { motion } from "framer-motion";

const screens = [
  { src: "/images/medicamentos.png",       label: "",    sub: "", rotate: -22, x: -180, y: 28,  opacity: 0.60, zi: 1  },
  { src: "/images/vacinas.png",      label: "",   sub: "",  rotate: -11, x:  -90, y: 10,  opacity: 0.82, zi: 2  },
  { src: "/images/home.png",         label: "",      sub: "",     rotate:   0, x:    0, y: -18, opacity: 1,    zi: 10, center: true },
  { src: "/images/estabilishList.png", label: "", sub: "",   rotate:  11, x:   90, y: 10,  opacity: 0.82, zi: 2  },
  { src: "/images/emergency.png",    label: "",sub: "",   rotate:  22, x:  180, y: 28,  opacity: 0.60, zi: 1  },
];

export default function AppShowcase() {
  return (
    <section className="py-24 overflow-hidden bg-[#f0faf5] w-full max-w-full">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 leading-tight">
          Tudo que seu pet precisa.
          <span className="block text-green-600">Em um só lugar.</span>
        </h2>
        <p className="text-center text-green-900/50 mb-16 max-w-xl mx-auto text-base leading-relaxed">
          Vacinas, medicamentos, consultas e emergências.<br />
          Um novo padrão de cuidado com seu pet está chegando.
        </p>

        {/* Stage */}
        <div className="relative overflow-hidden">
          <div className="relative h-[480px] flex items-end justify-center">

            {/* Glow de chão */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-12 bg-green-400/20 blur-3xl rounded-full pointer-events-none" />

            {screens.map((s, i) => (
              <motion.div
                key={i}
                initial={{ rotate: s.rotate, x: s.x, y: s.y + 100, opacity: 0 }}
                whileInView={{ rotate: s.rotate, x: s.x, y: s.y, opacity: s.opacity }}
                whileHover={{ rotate: s.rotate, x: s.x, y: s.y - 14, opacity: Math.min(s.opacity + 0.18, 1) }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.34, 1.1, 0.64, 1] }}
                className="absolute bottom-0 cursor-pointer"
                style={{ transformOrigin: "bottom center", zIndex: s.zi }}
              >
                {s.center && (
                  <>
                    <div className="absolute -inset-3 rounded-[44px] border-2 border-green-400/30 pointer-events-none" />
                    <div className="absolute -inset-8 bg-green-400/15 blur-2xl rounded-full -z-10 pointer-events-none" />
                  </>
                )}

                <div
                  className="bg-neutral-950 border-[5px] border-neutral-800 overflow-hidden"
                  style={{
                    width:  s.center ? 172 : 148,
                    height: s.center ? 368 : 318,
                    borderRadius: 34,
                    boxShadow: s.center
                      ? "0 40px 80px rgba(22,163,74,0.28), 0 20px 40px rgba(0,0,0,0.38)"
                      : "0 24px 48px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 28 }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-black rounded-b-xl z-10" />
                    <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          {screens.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-bold text-gray-900 text-sm">{s.label}</p>
              <p className="text-green-700/60 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}