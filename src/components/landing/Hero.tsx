import Image from "next/image";
import { CheckCircle, Compass, Rocket, ShieldCheck, Users } from "@/components/icons";
import { ClaimForm } from "./ClaimForm";
import s from "./Hero.module.css";

const POINTS = [
  "3 months of Kiro credits, added to your AWS account",
  "1:1 onboarding with a Signiance AI engineer",
  "Approved and set up within 48 hours",
  "New to AWS? We set up your account and onboard you",
];

const STATS = [
  { value: "AWS", label: "Advanced Tier Partner" },
  { value: "50+", label: "Projects delivered" },
  { value: "20+", label: "Happy clients" },
];

const BENEFITS = [
  {
    Icon: Rocket,
    title: "From prototype to production",
    body: "Spec mode turns a rough idea into requirements, design and tasks, so what you build is ready to ship.",
  },
  {
    Icon: Users,
    title: "Ship more with a small team",
    body: "Agents handle code, tests and docs, so your engineers spend their time on the product.",
  },
  {
    Icon: Compass,
    title: "Your standards, every time",
    body: "Teach Kiro your stack and conventions once. It follows them on every task, across your whole team.",
  },
  {
    Icon: ShieldCheck,
    title: "Built on AWS security",
    body: "Security and privacy from AWS, with team sign-in through your own AWS account from day one.",
  },
];

export function Hero() {
  return (
    <section id="top" className={s.hero}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.top}>
        <div className={s.copy}>
          <div className={`rv-load ${s.brand}`}>
            <Image src="/brand/kiro.png" alt="Kiro" width={52} height={52} className={`kiro-bob ${s.brandIcon}`} priority />
            <span>Kiro by AWS</span>
          </div>

          <div className={`rv-load ${s.badge}`}>
            <span className={`pulse-dot ${s.badgeDot}`} />
            Exclusive offer from an AWS Advanced Tier Partner
          </div>

          <h1 className={`rv-load d1 ${s.title}`}>Build Your Next AI Feature With Kiro. Free for 3 Months.</h1>

          <p className={`rv-load d2 ${s.lead}`}>
            Kiro is the agentic IDE from AWS that turns a plain English idea into specs, a design and working code. We
            are giving founders and tech leaders 3 months of Kiro credits, plus a hands-on onboarding session with our
            engineers.
          </p>

          <ul className={`rv-load d3 ${s.points}`}>
            {POINTS.map((p) => (
              <li key={p}>
                <CheckCircle size={22} />
                {p}
              </li>
            ))}
          </ul>

          <dl className={`rv-load d4 ${s.stats}`}>
            {STATS.map((st) => (
              <div key={st.label}>
                <dt className={s.statValue}>{st.value}</dt>
                <dd className={s.statLabel}>{st.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="claim" className={`rv-load d5 ${s.claim}`}>
          <ClaimForm />
        </div>
      </div>

      <div className={s.why}>
        <div className={`rv-load d4 ${s.whyHead}`}>
          <h2 className={s.whyTitle}>Why Founders Are Building With Kiro</h2>
          <p className={s.whySub}>Built by AWS for teams that need to ship, not just demo.</p>
        </div>
        <div className={s.benefits}>
          {BENEFITS.map(({ Icon, title, body }, i) => (
            <div key={title} className="rv-load" style={{ animationDelay: `${320 + i * 100}ms` }}>
              <div className={s.benefit}>
                <div className={s.benefitIcon}>
                  <Icon size={24} />
                </div>
                <h3 className={s.benefitTitle}>{title}</h3>
                <p className={s.benefitBody}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
