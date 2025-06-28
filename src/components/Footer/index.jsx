"use client";
import footerLogo from "./../../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-bg py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          {/* <img src={footerLogo} alt="Logo" className="h-14 w-26" /> */}
          {/* <span className="text-lg font-bold text-font-foreground">
            Devsowl
          </span> */}
          <span className="text-xs text-font-muted ml-3">
            © 2025 Devsowl. All rights reserved.
          </span>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a
            href="devsowl@gmail.com"
            className="text-font-muted hover:text-brand-primary transition flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Contact us
          </a>
          <a
            href="/privacy-policy"
            className="text-font-muted hover:text-brand-primary transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-font-muted hover:text-brand-primary transition"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
