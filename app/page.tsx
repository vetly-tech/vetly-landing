"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AppShowcase from "@/components/AppShowcase";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      alert("Você entrou na lista de espera");
      setEmail("");
    } catch (error) {
      alert("Erro ao enviar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-[#0a1f12] overflow-hidden font-['DM_Sans']">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-green-100/60 relative z-20">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Vetly"
            width={100}
            height={34}
            className="object-contain"
          />
        </div>
        <button
          onClick={() => document.getElementById("lista-de-espera")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-green-600 hover:bg-green-700 transition-colors text-white rounded-full px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium whitespace-nowrap"
        >
          Acesso antecipado
        </button>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 px-6 md:px-12 pt-12 md:pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 text-xs font-bold text-green-800 uppercase tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Em breve na App Store e Google Play
            </div>

            <h1 className="font-['Sora'] text-4xl md:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-5">
              O seu pet merece<br />
              o melhor <em className="not-italic text-green-600">cuidado.</em>
            </h1>

            <p className="text-[#4b7a5c] text-base md:text-lg leading-relaxed mb-7 md:mb-9 max-w-lg">
              Agendamentos com as melhores clínicas, histórico de vacinas, controle de medicamentos e emergências 24h — tudo em um único app feito para quem ama seus pets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <button
                onClick={() => document.getElementById("lista-de-espera")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-green-200 text-center"
              >
                Garantir acesso antecipado
              </button>
              <button
                onClick={() => document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-green-200 hover:border-green-400 hover:text-green-600 rounded-full px-7 py-4 text-sm font-medium transition-all text-center"
              >
                Ver como funciona
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6 md:mt-7">
              <div className="flex">
                {["DM", "AC", "RB", "FS"].map((inicial, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white -ml-2 first:ml-0 ${["bg-green-600", "bg-teal-600", "bg-blue-600", "bg-purple-600"][idx]}`}
                  >
                    {inicial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#4b7a5c]">
                <strong className="text-[#0a1f12]">+2.400 tutores</strong> já na lista de espera
              </p>
            </div>
          </motion.div>

          {/* Phones — leque só em desktop */}
          <div className="flex justify-center">
            <AppShowcase />
          </div>
        </div>

        {/* Phone único centralizado em mobile */}
        {/* <div className="md:hidden flex justify-center mt-10 pb-2">
          <div className="relative w-64">
            <div className="bg-neutral-950 border-[5px] border-neutral-800 rounded-[44px] overflow-hidden shadow-2xl shadow-green-300/40">
              <div className="relative rounded-[38px] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-black rounded-b-xl z-10" />
                <Image
                  src="/images/home.png"
                  alt="App Vetly"
                  width={280}
                  height={580}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-green-400/30 blur-2xl rounded-full" />
          </div>
        </div> */}
      </section>

      {/* STATS */}
      <div className="bg-[#0a1f12] py-10 md:py-12 px-6 md:px-12 mt-10 md:mt-0">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6 md:gap-8 text-center">
          {[
            { n: "24h",  l: "Atendimento de emergência" },
            { n: "100%", l: "Gratuito para tutores" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-['Sora'] text-3xl md:text-4xl font-black text-green-400 mb-1">{s.n}</div>
              <div className="text-xs md:text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="funcionalidades" className="py-16 md:py-24 px-6 md:px-12 bg-[#fafffe]">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
            Funcionalidades
          </span>
          <h2 className="font-['Sora'] text-3xl md:text-4xl xl:text-5xl font-black text-[#0a1f12] leading-tight mb-4">
            Tudo que seu pet precisa,<br className="hidden sm:block" />na palma da sua mão.
          </h2>
          <p className="text-[#4b7a5c] text-base leading-relaxed max-w-xl mb-10 md:mb-16">
            Da consulta de rotina à emergência às 3h da manhã — a Vetly está com você em todos os momentos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: "🗓️", title: "Agendamento simplificado", desc: "Marque consultas com as melhores clínicas em menos de 1 minuto. Sem ligação, sem fila.", tag: "Clínicas verificadas" },
              { icon: "💉", title: "Carteira de vacinas digital", desc: "Histórico completo registrado pela clínica ou por você. Lembretes automáticos antes do vencimento.", tag: "Registros automáticos" },
              { icon: "💊", title: "Controle de medicamentos", desc: "Gerencie dosagens, horários e duração dos tratamentos. Nunca mais esqueça um remédio.", tag: "Lembretes inteligentes" },
              { icon: "🏥", title: "Melhores clínicas", desc: "Só clínicas selecionadas e avaliadas por tutores reais. Filtre por especialidade e localização.", tag: "Avaliadas por tutores" },
              { icon: "🔔", title: "Lembretes personalizados", desc: "Consultas, vacinas, remédios e retornos. A Vetly te lembra de tudo com antecedência.", tag: "Notificações precisas" },
              { icon: "🚨", title: "Emergências 24h", desc: "Conecte-se imediatamente às clínicas que atendem emergências. Cada segundo importa.", tag: "Suporte 24 horas", red: true },
            ].map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 md:p-8 border transition-all hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden ${f.red ? "border-red-100 bg-red-50/50 hover:shadow-red-100" : "border-green-100 bg-white hover:shadow-green-100 hover:border-green-200"}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ${f.red ? "bg-red-400" : "bg-gradient-to-r from-green-500 to-green-300"}`} />
                <div className={`w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-5 ${f.red ? "bg-red-100" : "bg-green-50"}`}>{f.icon}</div>
                <h3 className={`font-['Sora'] text-base md:text-lg font-bold mb-2 ${f.red ? "text-red-900" : "text-[#0a1f12]"}`}>{f.title}</h3>
                <p className="text-[#4b7a5c] text-sm leading-relaxed">{f.desc}</p>
                <span className={`inline-block mt-4 text-xs font-semibold rounded-full px-3 py-1 ${f.red ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[#0a1f12] relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-green-600 rounded-full opacity-10 blur-3xl -top-32 -right-20" />
        <div className="absolute w-72 h-72 bg-green-400 rounded-full opacity-10 blur-3xl -bottom-20 -left-16" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

          {/* Phone mobile — aparece ANTES do texto, só no mobile */}
          <div className="md:hidden flex justify-center relative">
            <div className="w-56 bg-black rounded-[40px] border-[5px] border-neutral-800 overflow-hidden shadow-2xl">
              <div className="relative overflow-hidden rounded-[34px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-black rounded-b-xl z-10" />
                <Image
                  src="/images/emergency.png"
                  alt="Tela emergência"
                  width={240}
                  height={490}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 h-10 bg-red-500/25 blur-2xl rounded-full" />
          </div>

          {/* Texto */}
          <div>
            <span className="inline-block bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5">
              Emergências
            </span>
            <h2 className="font-['Sora'] text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight mb-4">
              Quando o tempo não pode esperar.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-7 md:mb-8">
              No momento mais crítico, a Vetly conecta você às clínicas com atendimento de emergência e funcionamento 24h, mais próximas de você.
            </p>
            <div className="flex flex-col gap-3">
              {["Ferimento ou sangramento", "Dificuldade para respirar", "Envenenamento ou ingestão de tóxico", "Convulsão ou perda de consciência", "Vômito ou diarreia intensa"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone desktop — só em md+ */}
          <div className="hidden md:flex justify-center relative">
            <div className="w-52 bg-black rounded-[36px] border-[5px] border-neutral-800 overflow-hidden shadow-2xl">
              <div className="relative overflow-hidden rounded-[30px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-black rounded-b-xl z-10" />
                <Image
                  src="/images/emergency.png"
                  alt="Tela emergência"
                  width={220}
                  height={450}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-12 bg-red-500/20 blur-2xl rounded-full" />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="lista-de-espera" className="py-20 md:py-28 px-6 md:px-12 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5 md:mb-6">
            Lista de espera
          </span>
          <h2 className="font-['Sora'] text-3xl md:text-4xl xl:text-5xl font-black text-[#0a1f12] leading-tight mb-4 md:mb-5">
            Seja um dos primeiros<br />a usar a <em className="not-italic text-green-600">Vetly.</em>
          </h2>
          <p className="text-[#4b7a5c] text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            O app está quase pronto. Cadastre seu e-mail e garanta acesso antecipado — e uma surpresa especial para os primeiros tutores.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 text-black text-sm outline-none focus:border-green-400 transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 disabled:opacity-60 transition text-white px-8 py-4 rounded-full font-semibold text-sm whitespace-nowrap"
            >
              {loading ? "Enviando..." : "Entrar na lista"}
            </button>
          </div>

          <p className="text-xs text-gray-400">Sem spam. Você pode cancelar a qualquer momento.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-8 md:py-10 border-t border-green-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Image src="/images/logo.png" alt="Vetly" width={80} height={28} className="object-contain" />
        <p className="text-xs text-gray-400">© 2026 Vetly. Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}