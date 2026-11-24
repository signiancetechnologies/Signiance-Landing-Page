import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import {
  Audience,
  Faq,
  FinalCta,
  Footer,
  HowItWorks,
  Included,
  Problems,
  WhatIsKiro,
} from "@/components/landing/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <WhatIsKiro />
        <Included />
        <Audience />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
