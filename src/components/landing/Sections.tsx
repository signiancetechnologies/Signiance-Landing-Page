import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CloudDown, FileText, Refresh, ShieldCheck, Target, Video, Zap } from "@/components/icons";
import { IdeDemo } from "./IdeDemo";
import s from "./landing.module.css";

/* Sound familiar? -------------------------------------------------------- */
const PROBLEMS = [
  {
    kicker: "Speed",
    title: "AI prototypes that never reach production",
    body: "Quick demos look great, then stall when it is time to make them reliable, tested and maintainable.",
  },
  {
    kicker: "Capacity",
    title: "A small team with a big roadmap",
    body: "Your engineers are already stretched. Adding AI features means slowing down something else.",
  },
  {
    kicker: "Clarity",
    title: "AI tools without a plan",
    body: "Coding assistants write code fast, but without specs and context the output drifts from what you actually need.",
  },
];

export function Problems() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.kicker}>Sound familiar?</div>
        <h2 className={`reveal ${s.title}`}>Everyone Wants AI in the Product. Few Teams Have the Time to Build It.</h2>
        <div className={`reveal ${s.cardGrid}`}>
          {PROBLEMS.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* What is Kiro ------------------------------------------------------------ */
const FEATURES = [
  {
    Icon: FileText,
    title: "Spec-driven development",
    body: "Describe a feature in plain English. Kiro writes the requirements, a technical design and a task list before writing code.",
  },
  {
    Icon: Zap,
    title: "Vibe mode for speed",
    body: "Prototype an idea in minutes, then switch to specs when it needs to be production grade.",
  },
  {
    Icon: Refresh,
    title: "Agent hooks",
    body: "Automate the busywork. Tests, docs and checks run in the background as your team works.",
  },
  {
    Icon: Target,
    title: "Steering that knows your stack",
    body: "Set your standards, architecture and conventions once. Kiro follows them on every task.",
  },
];

export function WhatIsKiro() {
  return (
    <section id="what-is-kiro" className={`${s.section} ${s.surface}`}>
      <div className={s.container}>
        <div className={s.featureHead}>
          <div>
            <div className={s.kicker}>What is Kiro</div>
            <h2 className={`reveal ${s.title} ${s.titleTight}`}>From Prompt to Production, With a Plan.</h2>
            <p className={s.lead}>
              Kiro is an AI coding environment built by AWS. Instead of jumping straight to code, it helps your team
              think first, then build in a way that holds up in production.
            </p>
          </div>
          <IdeDemo />
        </div>
        <div className={`reveal ${s.featureGrid}`}>
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className={`lift ${s.feature}`}>
              <div className={s.featureIcon}>
                <Icon size={22} />
              </div>
              <h3 className={s.featureTitle}>{title}</h3>
              <p className={s.featureBody}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* What you get ------------------------------------------------------------ */
const PERKS = [
  {
    mark: "1:1",
    title: "Onboarding session",
    body: "A 30 minute call with a Signiance engineer to set up Kiro on your real project.",
  },
  {
    mark: <Video size={28} />,
    title: "Quick training videos",
    body: "Short how-to videos so your whole team gets productive in the first week.",
  },
  {
    mark: <CloudDown size={28} />,
    title: "Check-ins while you build",
    body: "We check in through the 3 months, and again before your credits end, so you can decide what's next.",
  },
  {
    mark: <ShieldCheck size={28} />,
    title: "AWS onboarding, if you need it",
    body: "Not on AWS yet? We set up your AWS account and secure team sign-in for Kiro, so you can start building.",
  },
];

export function Included() {
  return (
    <section id="included" className={s.section}>
      <div className={`${s.container} ${s.split}`}>
        <div className={s.includedCopy}>
          <div className={s.kicker}>What you get</div>
          <h2 className={`reveal ${s.title} ${s.titleTight}`}>More Than Free Credits. A Team That Helps You Use Them.</h2>
          <p className={s.lead}>
            Most free trials end before teams get real value. We make sure yours doesn&apos;t, with engineers who
            already build with Kiro every day.
          </p>
          <Button href="#claim" variant="primary" size="lg" trailingArrow>
            Claim 3 Months Free
          </Button>
        </div>
        <div className={`reveal ${s.includedList}`}>
          <div className={`lift ${s.perk} ${s.perkFeatured}`}>
            <div className={s.perkMark}>3 mo</div>
            <div>
              <h3 className={s.perkTitle}>Kiro credits, on us</h3>
              <p className={s.perkBody}>
                3 months of Kiro credits through our AWS partnership, added straight to your company&apos;s AWS account.
              </p>
            </div>
          </div>
          {PERKS.map((p) => (
            <div key={p.title} className={`lift ${s.perk}`}>
              <div className={s.perkMark}>{p.mark}</div>
              <div>
                <h3 className={s.perkTitle}>{p.title}</h3>
                <p className={s.perkBody}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Who it is for ----------------------------------------------------------- */
const AUDIENCE = [
  {
    kicker: "Founders",
    title: "Ship your MVP or next big feature faster",
    body: "Go from idea to a working, well-structured product without hiring ahead of revenue.",
  },
  {
    kicker: "CTOs and tech leads",
    title: "Get more from the team you already have",
    body: "Give engineers an AI teammate that plans, documents and tests, not just autocompletes.",
  },
  {
    kicker: "CXOs",
    title: "Turn your AI plan into real output",
    body: "Claim credits for your team and see what AI-assisted development can deliver in 90 days.",
  },
];

export function Audience() {
  return (
    <section className={`${s.section} ${s.surface}`}>
      <div className={s.container}>
        <div className={s.kicker}>Who it is for</div>
        <h2 className={`reveal ${s.title}`} style={{ maxWidth: 820 }}>
          Whether You Write the Code or Set the AI Strategy, This Is for You.
        </h2>
        <div className={`reveal ${s.cardGrid}`}>
          {AUDIENCE.map((a) => (
            <Card key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* How it works ------------------------------------------------------------ */
const STEPS = [
  { title: "Apply", body: "Fill in the 2 minute form with your work email and what you want to build." },
  { title: "Get approved", body: "We review your request and send your Kiro credits within 48 hours." },
  { title: "Onboard", body: "Book your 30 minute session and set up Kiro on a real project with our engineer." },
  { title: "Build", body: "Use Kiro for 3 full months, with check-ins from us along the way." },
];

export function HowItWorks() {
  return (
    <section id="how" className={s.section}>
      <div className={s.container}>
        <div className={s.kicker}>How it works</div>
        <h2 className={`reveal ${s.title}`} style={{ marginBottom: 56, maxWidth: 720 }}>
          Four Steps. Building in Under 48 Hours.
        </h2>
        <ol className={`reveal ${s.steps}`}>
          {STEPS.map((st, i) => (
            <li key={st.title}>
              <div className={s.stepNum}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className={s.stepTitle}>{st.title}</h3>
              <p className={s.stepBody}>{st.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* FAQ --------------------------------------------------------------------- */
const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Is it really free?",
    a: "Yes. As an AWS Advanced Tier Partner, Signiance can offer Kiro credits for 3 months at no cost to you. The credits are added directly to your company's AWS account.",
  },
  {
    q: "Who is eligible?",
    a: (
      <>
        Early-stage to Series A startups, in most countries where AWS billing is available. You need an email on your
        company&apos;s own domain and an AWS account (or our help setting one up). Credits are issued once per company,
        and startups with active AWS Activate credits may not qualify. Full program details are on{" "}
        <a href="https://kiro.dev/startups/" target="_blank" rel="noopener noreferrer">
          kiro.dev/startups
        </a>
        .
      </>
    ),
  },
  {
    q: "I'm not technical. Is Kiro still for me?",
    a: "Kiro is built for people who build software. If you lead the business, claim the credits for your tech team or a developer you work with, and we will onboard them.",
  },
  {
    q: "What happens after 3 months?",
    a: "When your credits are used up or expire, Kiro billing moves to the standard paid plan on your AWS account. We check in before that happens, so you can choose to continue or remove your users in time.",
  },
  {
    q: "We're not on AWS yet. Can we still apply?",
    a: "Yes. Apply anyway and leave the AWS account ID blank. Our engineers will help you create an AWS account, set up team sign-in for Kiro, and onboard you before your credits start.",
  },
  {
    q: "Why is Signiance doing this?",
    a: "We help startups become AI native on AWS. Getting great tools into your team's hands is the best way to start. If you ever want help building something bigger, we're here.",
  },
];

export function Faq() {
  return (
    <section id="faq" className={s.section} style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className={s.faqWrap}>
        <div className={s.kicker}>FAQ</div>
        <h2 className={`reveal ${s.title}`} style={{ marginBottom: 40 }}>
          Questions, Answered.
        </h2>
        <div className={`reveal ${s.faqList}`}>
          {FAQS.map((f) => (
            <details key={f.q} className={s.faqItem}>
              <summary>
                {f.q}
                <span className={s.faqIcon} aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Final CTA --------------------------------------------------------------- */
export function FinalCta() {
  return (
    <section className={s.cta}>
      <div className={s.ctaInner}>
        <div className={s.ctaCopy}>
          <h2 className={`reveal ${s.ctaTitle}`}>Credits Are Limited. Start Building With Kiro This Week.</h2>
          <p className={s.ctaLead}>
            Apply in 2 minutes. Get approved within 48 hours. Build with AI for the next 3 months, free.
          </p>
          <div className={s.ctaActions}>
            <Button href="#claim" variant="primary" size="lg" trailingArrow>
              Claim My Free Kiro Credits
            </Button>
            <a href="mailto:connect@signiance.com" className={s.ctaLink}>
              Or book a consultation
            </a>
          </div>
        </div>
        <div className={s.ctaArt} aria-hidden="true">
          <div className={`cta-glow ${s.ctaGlow}`} />
          <Image src="/brand/kiro.png" alt="" width={150} height={150} className={`kiro-bob ${s.ctaKiro}`} />
        </div>
      </div>
    </section>
  );
}

/* Footer ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.footerBrand}>
          <Image src="/brand/signiance-logo-white.svg" alt="Signiance" width={121} height={28} style={{ height: 28, width: "auto" }} />
          <span className={s.footerDivider} />
          <Image src="/brand/kiro.png" alt="Kiro" width={32} height={32} />
          <span className={s.footerKiro}>Kiro</span>
        </div>
        <div className={s.footerLinks}>
          <a id="terms" href="#terms">
            Offer terms
          </a>
          <a id="privacy" href="#privacy">
            Privacy policy
          </a>
          <a href="mailto:connect@signiance.com">connect@signiance.com</a>
        </div>
      </div>
      <div className={s.footerLegal}>
        © 2026 Signiance Technologies. Kiro is a product of Amazon Web Services. Signiance is an AWS Advanced Tier
        Partner.
      </div>
    </footer>
  );
}
