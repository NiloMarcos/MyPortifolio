import { useState, useEffect } from "react";

import { CgClose } from "react-icons/cg";

import { FiAlignRight } from "react-icons/fi";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        isScrolled ? "fixed top-0 backdrop-blur-[1px] shadow-lg" : "mt-[35px]"
      } transition-all duration-300`}
    >
      <div className="max-w-[1220px] m-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/Logo.svg" alt="Logo do site" className="h-10" />
          <div>
            <p className="text-white text-lg lg:text-[22px] font-bold">
              Nilo Marcos De Freitas
            </p>
            <p className="text-white text-sm lg:text-[14px] font-normal">
              Front-end developer
            </p>
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2 lg:gap-[10px]">
            {["Início", "Sobre mim", "Experiência", "Projetos", "Contatos"].map((item) => (
              <li
                key={item}
                className="border-b-2 border-[#9A9A9A] flex items-center justify-center h-[35px] w-[96px]"
              >
                <a href="#" className="text-[13px] font-medium text-[#E1E1E1]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          onBlur={() => setIsMenuOpen(false)}
          className="lg:hidden rounded-md text-white"
        >
          {isMenuOpen ? <CgClose size={30} /> : <FiAlignRight size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800 p-4 mt-2">
          <ul className="flex flex-col gap-4">
            {["Início", "Sobre mim", "Experiência", "Projetos", "Contatos"].map((item) => (
              <li
                key={item}
                className="border-b border-[#9A9A9A] rounded-lg flex items-center justify-center h-[35px]"
              >
                <a href="#" className="text-[13px] font-medium text-[#E1E1E1]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
