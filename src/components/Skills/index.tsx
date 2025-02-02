import { motion } from "framer-motion";

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
  SiVtex
} from "react-icons/si";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mb-10 w-full max-w-[1200px] mx-auto mt-[60px] lg:mt-[105px] px-[20px]" id="skills">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none">
        {t('titleSkills')}
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-sm font-semibold uppercase"
      >
        {t('subTitleSkills')}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-3 gap-6 mt-6 lg:grid-cols-5 w-full lg:max-w-[750px]"
      >
        {[
          { icon: <FaHtml5 size={30} color="#FFF" />, name: "HTML5" },
          { icon: <FaCss3 size={30} color="#FFF" />, name: "CSS3" },
          { icon: <FaJsSquare size={30} color="#FFF" />, name: "JavaScript" },
          { icon: <SiTypescript size={30} color="#FFF" />, name: "TypeScript" },
          { icon: <FaReact size={30} color="#FFF" />, name: "React" },
          { icon: <RiNextjsFill size={30} color="#FFF" />, name: "Next.js" },
          { icon: <FaSass size={30} color="#FFF" />, name: "SASS" },
          { icon: <RiTailwindCssFill size={30} color="#FFF" />, name: "TailwindCSS" },
          { icon: <SiVtex size={30} color="#FFF" />, name: "VTEX" },
          { icon: <FaGithub size={30} color="#FFF" />, name: "GitHub" }
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform cursor-pointer"
          >
            <motion.div className="border border-white p-3 rounded-full">
              {skill.icon}
            </motion.div>
            <motion.span className="text-white text-sm font-medium">{skill.name}</motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
