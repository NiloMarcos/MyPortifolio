import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuLinks = [
    { id: 1, title: "Início", link: "#hero" },
    { id: 2, title: "Sobre mim", link: "#about" },
    { id: 3, title: "Conhecimentos", link: "#skills" },
    { id: 4, title: "Experiências", link: "#experiencies" },
    { id: 5, title: "Projetos", link: "#projects" },
  ]

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
            {menuLinks.map((item) => (
              <li
                key={item.id}
                className="border-b-2 border-[#9A9A9A] flex items-center justify-center h-[35px] w-[96px]"
              >
                <a href={item.link} className="text-[13px] font-medium text-[#E1E1E1]">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      
    </header>
  );
}
