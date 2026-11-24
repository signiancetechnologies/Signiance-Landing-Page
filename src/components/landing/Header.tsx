import Image from "next/image";
import { Button } from "@/components/ui/Button";
import s from "./landing.module.css";

const NAV = [
  { href: "#what-is-kiro", label: "What is Kiro" },
  { href: "#included", label: "What you get" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerInner}>
        <a href="#top" className={s.logoLink} aria-label="Signiance home">
          <Image src="/brand/signiance-logo.svg" alt="Signiance" width={129} height={30} className={s.logo} priority />
        </a>
        <nav aria-label="Page sections" className={s.nav}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#claim" variant="primary" size="sm" trailingArrow>
          Claim 3 Months Free
        </Button>
      </div>
    </header>
  );
}
