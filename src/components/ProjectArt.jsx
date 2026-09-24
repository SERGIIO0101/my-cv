// Ilustraciones SVG para las portadas de proyectos (se usan mientras no haya captura).
// Todas comparten el mismo lienzo 400x250, fondo oscuro con retícula de puntos y el amarillo de marca.

const Y = "#F5B027";
const LINE = "#3a3a3a";
const SOFT = "#2a2a2a";

function Canvas({ children, label }) {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label={label}>
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#2e2e2e" />
        </pattern>
        <radialGradient id="glow" cx="75%" cy="20%" r="60%">
          <stop offset="0%" stopColor={Y} stopOpacity="0.18" />
          <stop offset="100%" stopColor={Y} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="#161616" />
      <rect width="400" height="250" fill="url(#dots)" />
      <rect width="400" height="250" fill="url(#glow)" />
      {children}
    </svg>
  );
}

// Ventana de aplicación de escritorio: barra lateral + tabla de órdenes
function Desktop() {
  return (
    <Canvas label="Desktop app illustration">
      <rect x="60" y="40" width="280" height="175" rx="10" fill="#1d1d1d" stroke={LINE} />
      <circle cx="76" cy="54" r="4" fill="#ff5f57" />
      <circle cx="90" cy="54" r="4" fill="#febc2e" />
      <circle cx="104" cy="54" r="4" fill="#28c840" />
      <rect x="60" y="66" width="70" height="149" fill={SOFT} />
      {[84, 104, 124, 144].map((y, i) => (
        <rect key={y} x="72" y={y} width={i === 0 ? 46 : 38} height="8" rx="4" fill={i === 0 ? Y : "#444"} />
      ))}
      <rect x="145" y="80" width="180" height="16" rx="4" fill={SOFT} />
      {[106, 128, 150, 172].map((y) => (
        <g key={y}>
          <rect x="145" y={y} width="70" height="10" rx="5" fill="#3a3a3a" />
          <rect x="225" y={y} width="40" height="10" rx="5" fill="#333" />
          <rect x="280" y={y - 1} width="45" height="12" rx="6" fill={Y} fillOpacity={y === 106 ? 1 : 0.25} />
        </g>
      ))}
      <g transform="translate(300 180)">
        <rect width="54" height="40" rx="6" fill={Y} />
        <text x="27" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="#121212" fontFamily="monospace">PDF</text>
      </g>
    </Canvas>
  );
}

// Dashboard con gráfico de barras y línea de tendencia
function Dashboard() {
  const bars = [60, 90, 70, 120, 100, 140];
  return (
    <Canvas label="Dashboard illustration">
      <rect x="50" y="35" width="300" height="180" rx="12" fill="#1d1d1d" stroke={LINE} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${66 + i * 92} 50)`}>
          <rect width="80" height="36" rx="6" fill={SOFT} />
          <rect x="10" y="9" width="30" height="6" rx="3" fill="#555" />
          <rect x="10" y="20" width="48" height="8" rx="4" fill={i === 0 ? Y : "#666"} />
        </g>
      ))}
      <line x1="70" y1="200" x2="330" y2="200" stroke={LINE} />
      {bars.map((h, i) => (
        <rect key={i} x={80 + i * 40} y={200 - h * 0.7} width="22" height={h * 0.7} rx="4" fill={i === 5 ? Y : "#3d3d3d"} />
      ))}
      <polyline
        points={bars.map((h, i) => `${91 + i * 40},${190 - h * 0.7}`).join(" ")}
        fill="none"
        stroke={Y}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Canvas>
  );
}

// Documento de cotización + burbuja de WhatsApp
function Quote() {
  return (
    <Canvas label="Quote document illustration">
      <g transform="rotate(-4 170 125)">
        <rect x="95" y="30" width="150" height="195" rx="8" fill="#f2f2f2" />
        <rect x="110" y="48" width="60" height="10" rx="3" fill="#121212" />
        <rect x="110" y="64" width="90" height="6" rx="3" fill="#bbb" />
        {[90, 106, 122, 138].map((y) => (
          <g key={y}>
            <rect x="110" y={y} width="75" height="6" rx="3" fill="#ccc" />
            <rect x="200" y={y} width="30" height="6" rx="3" fill="#999" />
          </g>
        ))}
        <line x1="110" y1="158" x2="230" y2="158" stroke="#ddd" />
        <rect x="110" y="168" width="40" height="8" rx="3" fill="#666" />
        <rect x="185" y="164" width="45" height="16" rx="4" fill={Y} />
        <path d="M112 205 l8 8 l16 -18" fill="none" stroke="#28a745" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(250 120)">
        <rect width="110" height="56" rx="14" fill="#25D366" />
        <path d="M18 56 l-8 12 l20 -12z" fill="#25D366" />
        <rect x="14" y="14" width="70" height="7" rx="3.5" fill="#fff" fillOpacity="0.9" />
        <rect x="14" y="28" width="50" height="7" rx="3.5" fill="#fff" fillOpacity="0.7" />
      </g>
      <g transform="translate(270 45)">
        <path d="M22 0 L44 9 V26 C44 40 34 48 22 52 C10 48 0 40 0 26 V9 Z" fill="none" stroke={Y} strokeWidth="3" />
        <path d="M13 26 l7 7 l12 -14" fill="none" stroke={Y} strokeWidth="3" strokeLinecap="round" />
      </g>
    </Canvas>
  );
}

// Sitio web: navegador con hero, imagen y texto
function Website() {
  return (
    <Canvas label="Website illustration">
      <rect x="45" y="30" width="310" height="190" rx="10" fill="#1d1d1d" stroke={LINE} />
      <rect x="45" y="30" width="310" height="24" rx="10" fill={SOFT} />
      <rect x="120" y="37" width="160" height="10" rx="5" fill="#1d1d1d" />
      <rect x="65" y="75" width="120" height="16" rx="4" fill="#eee" />
      <rect x="65" y="97" width="90" height="16" rx="4" fill={Y} />
      {[125, 137, 149].map((y) => (
        <rect key={y} x="65" y={y} width={y === 149 ? 80 : 115} height="6" rx="3" fill="#555" />
      ))}
      <rect x="65" y="170" width="60" height="20" rx="10" fill={Y} />
      <rect x="215" y="70" width="120" height="125" rx="10" fill={SOFT} />
      <circle cx="275" cy="115" r="26" fill={Y} fillOpacity="0.85" />
      <path d="M225 190 l35 -40 l25 25 l18 -18 l32 33z" fill="#444" />
    </Canvas>
  );
}

// Marca: diamante dorado con líneas de "glitch"
function Brand() {
  return (
    <Canvas label="Brand illustration">
      {[70, 95, 150, 175].map((y, i) => (
        <rect key={y} x={i % 2 ? 60 : 230} y={y} width={i % 2 ? 90 : 110} height="3" fill={Y} fillOpacity="0.35" />
      ))}
      <g transform="translate(200 125)">
        <polygon points="0,-70 60,-20 0,70 -60,-20" fill="none" stroke={Y} strokeWidth="3" />
        <polygon points="0,-70 25,-20 0,70 -25,-20" fill={Y} fillOpacity="0.2" stroke={Y} strokeWidth="1.5" />
        <line x1="-60" y1="-20" x2="60" y2="-20" stroke={Y} strokeWidth="1.5" />
        <polygon points="-4,-73 56,-23 -4,67 -64,-23" fill="none" stroke="#ff3b3b" strokeOpacity="0.45" strokeWidth="1.5" />
        <polygon points="4,-67 64,-17 4,73 -56,-17" fill="none" stroke="#3bd4ff" strokeOpacity="0.35" strokeWidth="1.5" />
      </g>
      {[[70, 205], [310, 50], [330, 200]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={Y} />
      ))}
    </Canvas>
  );
}

// Plataforma académica: birrete + planilla de notas
function School() {
  return (
    <Canvas label="Academic platform illustration">
      <rect x="150" y="45" width="200" height="165" rx="10" fill="#1d1d1d" stroke={LINE} />
      <rect x="150" y="45" width="200" height="28" rx="10" fill={SOFT} />
      {[88, 112, 136, 160, 184].map((y, i) => (
        <g key={y}>
          <circle cx="172" cy={y + 4} r="7" fill="#444" />
          <rect x="186" y={y} width="80" height="8" rx="4" fill="#3d3d3d" />
          <rect x="296" y={y - 3} width="36" height="14" rx="7" fill={Y} fillOpacity={[1, 0.6, 0.85, 0.4, 0.7][i]} />
        </g>
      ))}
      <g transform="translate(95 105)">
        <polygon points="0,-30 55,-8 0,14 -55,-8" fill={Y} />
        <path d="M-32 2 V26 C-32 36 32 36 32 26 V2 L0 14 Z" fill="#c98d14" />
        <line x1="48" y1="-5" x2="48" y2="28" stroke={Y} strokeWidth="3" />
        <circle cx="48" cy="31" r="5" fill={Y} />
      </g>
    </Canvas>
  );
}

// Envío seguro: sobre + PDF con candado
function SecureMail() {
  return (
    <Canvas label="Secure email illustration">
      <path d="M95 150 C150 90 230 90 290 120" fill="none" stroke={Y} strokeWidth="2" strokeDasharray="6 8" />
      <g transform="translate(55 115)">
        <rect width="80" height="100" rx="8" fill="#f2f2f2" />
        <rect x="12" y="14" width="40" height="8" rx="3" fill="#121212" />
        {[32, 44, 56].map((y) => (
          <rect key={y} x="12" y={y} width="56" height="5" rx="2.5" fill="#bbb" />
        ))}
        <rect x="12" y="72" width="44" height="16" rx="4" fill={Y} />
        <text x="34" y="84" textAnchor="middle" fontSize="10" fontWeight="700" fill="#121212" fontFamily="monospace">PDF</text>
      </g>
      <g transform="translate(115 175)">
        <rect x="-16" y="-4" width="32" height="26" rx="5" fill={Y} />
        <path d="M-9 -4 V-12 a9 9 0 0 1 18 0 V-4" fill="none" stroke={Y} strokeWidth="4" />
        <circle cy="9" r="4" fill="#121212" />
      </g>
      <g transform="translate(245 70)">
        <rect width="120" height="80" rx="8" fill="#1d1d1d" stroke={Y} strokeWidth="2.5" />
        <path d="M4 6 L60 46 L116 6" fill="none" stroke={Y} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="112" cy="4" r="12" fill="#28c840" />
        <path d="M106 4 l4 4 l8 -8" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {[[260, 185], [300, 185], [340, 185]].map(([x, y], i) => (
        <rect key={x} x={x} y={y} width="30" height="8" rx="4" fill={i === 0 ? Y : "#3d3d3d"} />
      ))}
    </Canvas>
  );
}

const variants = { mail: SecureMail, desktop: Desktop, dashboard: Dashboard, quote: Quote, website: Website, brand: Brand, school: School };

export default function ProjectArt({ variant }) {
  const Art = variants[variant] || Website;
  return <Art />;
}
