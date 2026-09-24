import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Misma lógica de cálculo que DevGuard 4.0 (src/constants/pricing.jsx y App.jsx del repo cotizador-sergio)
const RATES = { DEV: 85000, DISENO: 50000, SOPORTE: 60000, COPY: 45000 };
const MIN_DEV_PRICE = 800000;
const URGENCY_MULTIPLIER = 1.4;
const CUSTOM_BUILD_MULTIPLIER = 1.5;
const DEPOSIT = 0.4;

const services = [
  { id: "DEV", label: "Web development" },
  { id: "DISENO", label: "Graphic design" },
  { id: "SOPORTE", label: "Tech support" },
  { id: "COPY", label: "Copywriting" },
];

const cop = (n) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", currencyDisplay: "code", maximumFractionDigits: 0 }).format(n);

function Toggle({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex-1 px-3 py-3 rounded-xl border text-sm font-semibold transition ${
        active
          ? "bg-[var(--color-1)] border-[var(--color-1)] text-[#121212]"
          : "border-white/15 text-gray-300 hover:border-[var(--color-1)]"
      }`}
    >
      {children}
    </button>
  );
}

export default function DevGuardDemo() {
  const [service, setService] = useState("DEV");
  const [hours, setHours] = useState(20);
  const [custom, setCustom] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const price = useMemo(() => {
    let base = hours * RATES[service];
    if (service === "DEV" && base < MIN_DEV_PRICE) base = MIN_DEV_PRICE;
    if (custom) base *= CUSTOM_BUILD_MULTIPLIER;
    if (urgent) base *= URGENCY_MULTIPLIER;
    return base;
  }, [hours, service, custom, urgent]);

  const weeks = Math.max(1, Math.ceil(hours / 15));

  return (
    <section id="demo" className="bg-[#0d0d0d] text-white px-6 py-16 md:py-24 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center" style={{ fontFamily: "var(--font-code)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-script text-3xl text-[var(--color-1)] -rotate-1">Don't take my word for it</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl mt-2">
            Try <span className="text-[var(--color-1)]">DevGuard</span> live
          </h2>
          <p className="mt-5 text-gray-300 leading-relaxed">
            DevGuard 4.0 is the quoting engine I built to price my own projects: hourly rates, minimum fees,
            from-scratch and urgency surcharges, delivery time and deposit — then it exports a PDF proposal or
            sends it via WhatsApp.
          </p>
          <p className="mt-4 text-sm text-gray-500">This is the real pricing logic, running right here.</p>
          <a
            href="https://github.com/SERGIIO0101/cotizador-sergio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold hover:text-[var(--color-1)]"
          >
            <FaGithub /> See the source code
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#F5B027]/30 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(245,176,39,0.08)]"
        >
          <div className="flex items-center justify-between">
            <p className="font-bold">🛡️ DevGuard 4.0</p>
            <span className="text-xs text-gray-500">live preview</span>
          </div>

          <label className="block mt-6 text-xs uppercase tracking-wider text-gray-400">Service</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {services.map((s) => (
              <Toggle key={s.id} active={service === s.id} onClick={() => setService(s.id)}>
                {s.label}
              </Toggle>
            ))}
          </div>

          <div className="mt-6 flex items-baseline justify-between">
            <label htmlFor="hours" className="text-xs uppercase tracking-wider text-gray-400">Estimated hours</label>
            <span className="text-[var(--color-1)] font-bold">{hours} h</span>
          </div>
          <input
            id="hours"
            type="range"
            min="1"
            max="120"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="mt-3 w-full h-2 accent-[#F5B027] cursor-pointer"
          />

          <div className="mt-6 flex gap-2">
            <Toggle active={custom} onClick={() => setCustom(!custom)}>From scratch +50%</Toggle>
            <Toggle active={urgent} onClick={() => setUrgent(!urgent)}>Urgent +40%</Toggle>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10">
            <p className="text-xs uppercase tracking-wider text-gray-400">Total</p>
            <p className="font-display text-4xl sm:text-6xl whitespace-nowrap text-[var(--color-1)] mt-1" aria-live="polite">
              {cop(price)}
            </p>
            <div className="mt-3 flex justify-between text-sm text-gray-300">
              <span>{weeks} {weeks === 1 ? "week" : "weeks"} delivery</span>
              <span>40% deposit: {cop(price * DEPOSIT)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
