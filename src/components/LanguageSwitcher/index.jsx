import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "../../context/LanguageContext";

const languages = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-font-foreground hover:bg-accent transition">
        <GlobeAltIcon className="w-4 h-4 text-brand-primary" />
        <span>{languages[language]}</span>
        <ChevronDownIcon className="w-4 h-4 text-muted-foreground" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-surface-bg dark:bg-background border border-border shadow-lg ring-1 ring-black/5 focus:outline-none z-50 backdrop-blur-sm">
          {Object.entries(languages).map(([code, label]) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  onClick={() => setLanguage(code)}
                  className={`w-full text-left px-4 py-2 text-sm rounded-md transition ${
                    active
                      ? "bg-brand-primary text-white"
                      : "text-font-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;
