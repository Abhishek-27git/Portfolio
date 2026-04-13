"use client";

export function DeveloperIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`developer-illustration ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Developer illustration"
      >
        {/* Background circle */}
        <circle cx="250" cy="240" r="190" fill="#f0f0f0" className="dark-fill-bg" />

        {/* ===== DESK ===== */}
        <g className="dev-desk">
          {/* Desk surface */}
          <rect x="90" y="330" width="320" height="10" rx="3" fill="#d4d4d4" stroke="#888" strokeWidth="1.5" />
          {/* Desk legs */}
          <rect x="120" y="340" width="6" height="60" rx="2" fill="#bbb" />
          <rect x="374" y="340" width="6" height="60" rx="2" fill="#bbb" />
          {/* Desk shelf */}
          <rect x="140" y="370" width="220" height="4" rx="2" fill="#ccc" />
        </g>

        {/* ===== BOOKS (left side) ===== */}
        <g className="dev-books">
          <rect x="105" y="306" width="45" height="8" rx="1.5" fill="#555" />
          <rect x="108" y="298" width="40" height="8" rx="1.5" fill="#777" />
          <rect x="106" y="290" width="42" height="8" rx="1.5" fill="#999" />
          {/* Printer/device on top */}
          <rect x="110" y="275" width="35" height="15" rx="3" fill="#666" />
          <rect x="118" y="272" width="20" height="5" rx="1" fill="#888" />
        </g>

        {/* ===== PEN HOLDER ===== */}
        <g className="dev-pen-holder">
          <rect x="158" y="305" width="16" height="25" rx="8" fill="#444" stroke="#333" strokeWidth="1" />
          <line x1="163" y1="305" x2="161" y2="290" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          <line x1="168" y1="305" x2="170" y2="288" stroke="#555" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ===== LAPTOP ===== */}
        <g className="dev-laptop">
          {/* Laptop screen */}
          <rect x="190" y="260" width="120" height="72" rx="5" fill="#e8e8e8" stroke="#333" strokeWidth="2.5" />
          {/* Screen bezel */}
          <rect x="196" y="265" width="108" height="58" rx="3" fill="#f5f5f5" />
          {/* Code lines on screen */}
          <g className="dev-screen-code" opacity="0.6">
            <rect x="203" y="273" width="40" height="3" rx="1.5" fill="#888" />
            <rect x="203" y="280" width="55" height="3" rx="1.5" fill="#aaa" />
            <rect x="210" y="287" width="45" height="3" rx="1.5" fill="#999" />
            <rect x="210" y="294" width="30" height="3" rx="1.5" fill="#bbb" />
            <rect x="203" y="301" width="50" height="3" rx="1.5" fill="#aaa" />
            <rect x="210" y="308" width="35" height="3" rx="1.5" fill="#999" />
          </g>
          {/* Cursor blinking on screen */}
          <rect x="248" y="294" width="2" height="8" rx="1" fill="#555" className="dev-cursor" />
          {/* Laptop base */}
          <path d="M185 332 L192 330 L308 330 L315 332 Z" fill="#ccc" stroke="#888" strokeWidth="1" />
          {/* Apple-style logo on back */}
          <circle cx="250" cy="296" r="6" fill="none" stroke="#ccc" strokeWidth="1.2" opacity="0.4" />
        </g>

        {/* ===== COFFEE MUG ===== */}
        <g className="dev-mug">
          <rect x="320" y="305" width="22" height="26" rx="4" fill="#e8e0d0" stroke="#998866" strokeWidth="1.5" />
          {/* Mug handle */}
          <path d="M342 312 Q352 312 352 320 Q352 328 342 328" fill="none" stroke="#998866" strokeWidth="2" />
          {/* Mug design */}
          <text x="326" y="323" fontSize="10" fill="#998866" fontWeight="bold" fontFamily="serif">☕</text>
          {/* Steam */}
          <g className="dev-steam">
            <path d="M325 302 Q327 296 325 290" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M331 300 Q333 293 331 286" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M337 302 Q339 296 337 290" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </g>
        </g>

        {/* ===== DESK LAMP ===== */}
        <g className="dev-lamp">
          {/* Lamp base */}
          <ellipse cx="380" cy="330" rx="15" ry="4" fill="#aaa" />
          {/* Lamp arm lower */}
          <line x1="380" y1="328" x2="370" y2="295" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          {/* Lamp arm upper */}
          <line x1="370" y1="295" x2="395" y2="270" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          {/* Lamp joint */}
          <circle cx="370" cy="295" r="3.5" fill="#999" />
          {/* Lamp shade */}
          <path d="M382 270 L395 270 L400 285 L377 285 Z" fill="#e8e8e8" stroke="#999" strokeWidth="1.5" />
          {/* Light glow */}
          <ellipse cx="389" cy="288" rx="10" ry="5" fill="#fff9e0" opacity="0.4" className="dev-glow" />
        </g>

        {/* ===== SPARKLE ===== */}
        <g className="dev-sparkle">
          <path d="M400 175 L403 183 L411 186 L403 189 L400 197 L397 189 L389 186 L397 183 Z" fill="#ccc" />
        </g>

        {/* ===== CLOCK ===== */}
        <g className="dev-clock">
          <circle cx="140" cy="185" r="22" fill="#d0d0d0" stroke="#aaa" strokeWidth="2" />
          <circle cx="140" cy="185" r="18" fill="#e5e5e5" />
          {/* Clock hands */}
          <line x1="140" y1="185" x2="140" y2="172" stroke="#777" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="185" x2="150" y2="190" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="140" cy="185" r="2" fill="#777" />
          {/* Clock arrow */}
          <path d="M133 195 L140 198 L140 192 Z" fill="#999" />
        </g>

        {/* ===== DEVELOPER CHARACTER ===== */}
        <g className="dev-character">
          {/* Hair */}
          <g className="dev-hair">
            <ellipse cx="250" cy="240" rx="40" ry="38" fill="#333" />
            {/* Hair top spikes */}
            <path d="M220 235 Q225 210 240 215 Q245 205 255 212 Q260 205 268 215 Q275 210 280 235" fill="#333" />
            {/* Hair side left */}
            <path d="M212 240 Q210 225 220 220 Q215 230 218 240" fill="#2a2a2a" />
            {/* Hair side right */}
            <path d="M288 240 Q290 225 280 220 Q285 230 282 240" fill="#2a2a2a" />
          </g>

          {/* Face */}
          <ellipse cx="250" cy="255" rx="28" ry="15" fill="#f5e6d3" />

          {/* Eyes */}
          <g className="dev-eyes">
            <g className="dev-blink">
              {/* Left eye */}
              <ellipse cx="240" cy="253" rx="4.5" ry="5" fill="#333" />
              <ellipse cx="241" cy="252" rx="1.5" ry="1.5" fill="#fff" />
              {/* Right eye */}
              <ellipse cx="260" cy="253" rx="4.5" ry="5" fill="#333" />
              <ellipse cx="261" cy="252" rx="1.5" ry="1.5" fill="#fff" />
            </g>
          </g>

          {/* Nose hint */}
          <ellipse cx="250" cy="258" rx="2" ry="1" fill="#e8d5c0" />
        </g>
      </svg>
    </div>
  );
}
