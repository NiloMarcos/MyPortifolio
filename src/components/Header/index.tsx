import { useState, useEffect } from "react";

import Logo from '../../assets/Logo.svg';

import { useTranslation } from 'react-i18next';

interface TypeMenu {
  id: number;
  title: string;
  link: string;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: 'en' | 'pt') => {
    i18n.changeLanguage(lang);
  };

  const menuLinks = t("menuLinks", { returnObjects: true }) as TypeMenu[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header
      className={`w-full px-4 lg:px-[110px] ${
        isScrolled ? "fixed top-0 backdrop-blur-[1px] shadow-lg z-30" : "mt-[35px]"
      } transition-all duration-300`}
    >
      <div className="max-w-[1220px] m-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo do site" className="h-10" />
          <div>
            <p className="text-white text-lg lg:text-[22px] font-bold">
              Nilo Marcos De Freitas
            </p>
            <p className="text-white text-sm lg:text-[14px] font-normal">
              {t('headerTitle')}
            </p>
          </div>
        </div>

        <nav className="lg:flex lg:flex-row">
          <ul className=" hidden lg:flex items-center gap-2 lg:gap-[10px]">
            {menuLinks.map((item) => (
              <li
                key={item.id}
                className="border-b-2 border-[#9A9A9A] flex items-center justify-center h-[35px] w-[96px] transition-all hover:opacity-[.8]"
              >
                <a href={item.link} className="text-[13px] font-medium text-[#E1E1E1]">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="max-w-max flex items-center gap-2 pl-4">
            <select
              onChange={(e) => {
                const lang = e.target.value as 'en' | 'pt';
                changeLanguage(lang);
              }}
              className="text-white bg-transparent border-none outline-none"
            >
              <option value="en" className="text-black cursor-pointer">EN</option>
              <option value="pt" className="text-black cursor-pointer">PT</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}
