import Image from "next/image";
import { MailIcon, LinkedInIcon } from "./icons";

export default function SiteHeader({ active }: { active?: "work" | "photography" }) {
  return (
    <header className="grid grid-cols-2 items-center px-6 py-5 sm:grid-cols-[1fr_auto_1fr] sm:px-10 md:px-14">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-4 no-underline">
          <Image
            src="/images/ac-logo.svg"
            alt="Akshita Chandrashekar logo"
            width={58}
            height={39}
            className="h-8 w-auto sm:h-10"
          />
          {/* <div>
            <div className="font-clash text-base font-medium tracking-wide text-foreground sm:text-lg">
              Akshita Chandrashekar
            </div>
            <div className="font-mono-hero mt-0.5 text-[10px] tracking-[0.15em] text-secondary sm:text-xs">
              PRODUCT DESIGNER &middot; STORYTELLER
            </div>
          </div> */}
        </a>
      </div>

      <nav className="font-mono-hero hidden items-center justify-self-center gap-8 text-sm sm:flex">
        <a
          href="/#work"
          className={`text-foreground no-underline ${
            active === "work" ? "underline underline-offset-4" : "hover:underline"
          }`}
        >
          Work
        </a>
        <a
          href="/photography"
          className={`text-foreground no-underline ${
            active === "photography" ? "underline underline-offset-4" : "hover:underline"
          }`}
        >
          Photography
        </a>
        <a href="/#contact" className="text-foreground no-underline hover:underline">
          Contact
        </a>
      </nav>

      <div className="flex items-center justify-self-end gap-2 sm:gap-5">
        <a
          href="mailto:info.akshitac@gmail.com"
          aria-label="Email Akshita"
          className="hidden sm:block"
        >
          <MailIcon />
        </a>
        <a href="#" aria-label="Akshita's LinkedIn" className="hidden sm:block">
          <LinkedInIcon />
        </a>
        <a
          href="mailto:info.akshitac@gmail.com"
          className="font-mono-hero rounded-full bg-foreground px-3 py-2 text-[11px] whitespace-nowrap text-background no-underline hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Let&rsquo;s connect!
        </a>
      </div>
    </header>
  );
}
