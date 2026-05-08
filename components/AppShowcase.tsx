"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const screens = [
  { src: "/images/medicamentos.png", label: "", sub: "", rotate: -22, x: -180, y: 28, opacity: 0.60, zi: 1 },
  { src: "/images/vacinas.png", label: "", sub: "", rotate: -11, x: -90, y: 10, opacity: 0.82, zi: 2 },
  { src: "/images/home.png", label: "", sub: "", rotate: 0, x: 0, y: -18, opacity: 1, zi: 10, center: true },
  { src: "/images/estabilishList.png", label: "", sub: "", rotate: 11, x: 90, y: 10, opacity: 0.82, zi: 2 },
  { src: "/images/emergency.png", label: "", sub: "", rotate: 22, x: 180, y: 28, opacity: 0.60, zi: 1 },
];

export default function AppShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // escala menor no mobile
  const scale = isMobile ? 0.52 : 1;

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-[#f0faf5] w-full max-w-full">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITULO */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 leading-tight">
          Tudo que seu pet precisa.
          <span className="block text-green-600">
            Em um só lugar.
          </span>
        </h2>

        <p className="text-center text-green-900/50 mb-10 md:mb-16 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Vacinas, medicamentos, consultas e emergências.
          <br />
          Um novo padrão de cuidado com seu pet está chegando.
        </p>

        {/* STAGE */}
        <div className="relative overflow-hidden">
          <div
            className="relative flex items-end justify-center"
            style={{
              height: isMobile ? 280 : 480,
            }}
          >
            {/* Glow chão */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-12 bg-green-400/20 blur-3xl rounded-full pointer-events-none" />

            {screens.map((s, i) => (
              <motion.div
                key={i}
                initial={{
                  rotate: s.rotate,
                  x: s.x * scale,
                  y: (s.y + 100) * scale,
                  opacity: 0,
                }}
                whileInView={{
                  rotate: s.rotate,
                  x: s.x * scale,
                  y: s.y * scale,
                  opacity: s.opacity,
                }}
                whileHover={{
                  rotate: s.rotate,
                  x: s.x * scale,
                  y: (s.y - 14) * scale,
                  opacity: Math.min(s.opacity + 0.18, 1),
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.34, 1.1, 0.64, 1],
                }}
                className="absolute bottom-0 cursor-pointer"
                style={{
                  transformOrigin: "bottom center",
                  zIndex: s.zi,
                }}
              >
                {/* Highlight aparelho central */}
                {s.center && (
                  <>
                    <div
                      className="absolute -inset-3 rounded-[44px] border-2 border-green-400/30 pointer-events-none"
                    />

                    <div
                      className="absolute -inset-8 bg-green-400/15 blur-2xl rounded-full -z-10 pointer-events-none"
                    />
                  </>
                )}

                {/* DEVICE */}
                <div
                  className="bg-neutral-950 border-[5px] border-neutral-800 overflow-hidden"
                  style={{
                    width: s.center ? 172 * scale : 148 * scale,
                    height: s.center ? 368 * scale : 318 * scale,
                    borderRadius: 34 * scale,
                    boxShadow: s.center
                      ? "0 40px 80px rgba(22,163,74,0.28), 0 20px 40px rgba(0,0,0,0.38)"
                      : "0 24px 48px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* SCREEN */}
                  <div
                    className="relative w-full h-full overflow-hidden bg-black"
                    style={{
                      borderRadius: 28 * scale,
                    }}
                  >
                    {/* NOTCH RESPONSIVO */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-neutral-900"
                      style={{
                        width: 56 * scale,
                        height: 20 * scale,
                        borderBottomLeftRadius: 14 * scale,
                        borderBottomRightRadius: 14 * scale,
                      }}
                    />

                    {/* IMG */}
                    <img
                      src={s.src}
                      alt={s.label}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}