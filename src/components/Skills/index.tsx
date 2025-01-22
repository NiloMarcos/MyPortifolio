import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaJsSquare,
  FaSass,
  FaGithub,
} from "react-icons/fa";

import { 
  SiTypescript,
  SiStyledcomponents,
  SiVtex

} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

export function Skills() {
  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <p className="text-2xl font-extrabold text-white uppercase">
        Conhecimentos
      </p>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-sm font-semibold uppercase">
        Tecnologias
      </p>
      <div className="grid grid-cols-3 gap-6 mt-6 lg:grid-cols-5">
        {[
          { icon: <FaHtml5 size={30} color="#FFF" />, name: "HTML5" },
          { icon: <FaCss3 size={30} color="#FFF" />, name: "CSS3" },
          { icon: <FaSass size={30} color="#FFF" />, name: "SASS" },
          {
            icon: <SiStyledcomponents size={30} color="#FFF" />,
            name: "Styled-components",
          },
          { icon: <FaJsSquare size={30} color="#FFF" />, name: "JavaScript" },
          { icon: <SiTypescript size={30} color="#FFF" />, name: "TypeScript" },
          { icon: <FaReact size={30} color="#FFF" />, name: "React" },
          { icon: <RiNextjsFill size={30} color="#FFF" />, name: "Next.js" },
          { icon: <SiVtex size={30} color="#FFF" />, name: "VTEX" },
          { icon: <FaGithub size={30} color="#FFF" />, name: "GitHub" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
          >
            <div className="border border-white p-3 rounded-full">
              {skill.icon}
            </div>
            <span className="text-white text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
