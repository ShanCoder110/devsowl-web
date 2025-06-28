import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import translations from "../../translation/translations";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";
import logo from "./../../assets/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const navigation = [
    { name: "FAQ", href: "#faq" },
    { name: "Pricing", href: "#pricing" },
    { name: "Examples", href: "#examples" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 left-0 right-0 z-40 transition duration-300",
        isScrolled
          ? "backdrop-blur-md bg-[color-mix(in srgb,var(--color-surface-bg) 80%,transparent)] text-font-foreground"
          : "bg-transparent"
      )}
    >
      {({ open }) => (
        <>
          <div className="flex justify-between items-center py-6 px-6 relative">
            <div className="flex items-center">
              {/* <img src={logo} alt="Devsowl Logo" className="h-10 w-10" /> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-font-foreground text-lg font-medium px-4 py-2 rounded-xl transition hover:bg-font-foreground/10 hover:shadow hover:text-brand-primary"
                >
                  #{item.name}
                </a>
              ))}
              <LanguageSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <DisclosureButton
              className="md:hidden flex flex-col justify-center items-center w-10 h-10"
              aria-label="Open menu"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6 text-font-foreground" />
              ) : (
                <>
                  <span className="block w-7 h-1 bg-font-foreground rounded-full transition-all duration-300 mb-1.5"></span>
                  <span className="block w-7 h-1 bg-font-foreground rounded-full transition-all duration-300 mb-1.5"></span>
                  <span className="block w-7 h-1 bg-font-foreground rounded-full transition-all duration-300"></span>
                </>
              )}
            </DisclosureButton>
          </div>

          {/* Mobile Navigation */}
          <DisclosurePanel className="md:hidden bg-[color-mix(in srgb,var(--color-surface-bg) 60%,black)] backdrop-blur-md text-font-foreground px-6 pb-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-medium hover:text-brand-primary"
              >
                #{item.name}
              </a>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
