import Image from "next/image";
import s from "./IdeDemo.module.css";

const STEPS = [
  { label: "Requirements", file: "requirements.md" },
  { label: "Design", file: "design.md" },
  { label: "Tasks", file: "tasks.md" },
];

const BARS = [
  { width: "62%", color: "var(--blue-400)" },
  { width: "84%", color: "var(--blue-200)" },
  { width: "48%", color: "rgba(255,255,255,0.85)" },
  { width: "72%", color: "var(--blue-200)" },
];

/** Looping illustration: a prompt is typed, specs tick off, code appears, tests pass. */
export function IdeDemo() {
  return (
    <div
      className={`reveal ${s.wrap}`}
      role="img"
      aria-label="Animated example of Kiro turning a prompt into specs and tested code"
    >
      <Image src="/brand/kiro.png" alt="" width={72} height={72} className={`kiro-bob ${s.mascot}`} />
      <div className={s.window}>
        <div className={s.chrome}>
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.path}>support-agent / spec</span>
        </div>
        <div className={s.body}>
          <div className={s.prompt}>
            <span className={s.type}>Add an AI support agent to our app</span>
            <span className={s.caret} />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.label} className={`${s.row} ${s[`r${i + 1}`]}`}>
              <span className={`${s.tick} ${s[`t${i + 1}`]}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {step.label}
              <span className={s.file}>{step.file}</span>
            </div>
          ))}

          <div className={s.code}>
            {BARS.map((b, i) => (
              <span
                key={i}
                className={s.bar}
                style={{ width: b.width, background: b.color, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>

          <div className={s.pass}>
            <span className={s.passDot} />
            All tests passed
          </div>
        </div>
      </div>
    </div>
  );
}
