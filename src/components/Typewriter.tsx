import { useEffect, useState } from "react";

export function Typewriter({
  lines,
  speed = 55,
  className = "",
}: {
  lines: string[];
  speed?: number;
  className?: string;
}) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    // pause before next line
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 900);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines, speed]);

  const shown = lines.slice(0, lineIdx);
  const active = lines[lineIdx]?.slice(0, charIdx) ?? "";
  const done = lineIdx >= lines.length;

  return (
    <div className={className}>
      {shown.map((l, i) => (
        <div key={i}>
          <span className="text-[var(--mc-yellow)]">&gt; </span>
          <span>{l}</span>
        </div>
      ))}
      {!done && (
        <div>
          <span className="text-[var(--mc-yellow)]">&gt; </span>
          <span className="mc-caret">{active}</span>
        </div>
      )}
    </div>
  );
}

export default Typewriter;