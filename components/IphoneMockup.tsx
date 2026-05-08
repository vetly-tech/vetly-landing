"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function IphoneMockup({ src }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px]"
    >
      {/* Corpo do iPhone */}
      <div className="absolute inset-0 bg-black rounded-[50px] shadow-2xl border-[6px] border-neutral-800">
        
        {/* Tela */}
        <div className="absolute inset-[6px] rounded-[40px] overflow-hidden bg-black">
          
          {/* NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-2xl z-10" />

          {/* IMAGEM DO APP */}
          <img
            src={src}
            alt="app screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Glow estilo Stripe */}
      <div className="absolute -inset-10 bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl opacity-40 z-[-1]" />
    </motion.div>
  );
}