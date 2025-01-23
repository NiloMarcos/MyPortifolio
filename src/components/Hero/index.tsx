import { motion } from "framer-motion";

import Me from "../../assets/me.jpg";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export function Hero() {
  return (
    <div className="w-full flex items-center justify-center max-w-[1200px] mx-auto mt-[60px] px-[20px]">
      <motion.div
        className="w-full max-w-[1220px] m-auto flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={Me}
          alt="Foto de perfil"
          className="w-[230px] h-[230px] rounded-[50%] border border-[#9A9A9A] p-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.p
          className="text-[24px] font-bold text-white mt-[36px] lg:text-[40px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nilo Marcos De Freitas
        </motion.p>
        <motion.p
          className="text-[14px] font-semibold text-[#C9C9C9] lg:text-[16px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Desenvolvedor Front-end / Desenvolvedor Mobile
        </motion.p>
        <motion.span
          className="w-full text-[14px] font-medium text-[#E1E1E1] mt-[21px] text-center lg:text-[16px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Desenvolvedor Front-end / Mobile especializado em ReactJS, React Native, Next.js e TypeScript. Focado em criar interfaces modernas, performáticas e acessíveis, entrego soluções escaláveis que proporcionam experiências excepcionais para os usuários.
        </motion.span>

        <motion.div
          className="flex items-center justify-center gap-[20px] mt-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div className="flex items-center gap-4">
            <a href="https://github.com/NiloMarcos" target="_blank" className="hover:opacity-[.7] transition-opacity">
              <FaGithub size={20} color="#FFF" />
            </a>

            <a href="https://www.linkedin.com/in/nilomarcos/" target="_blank" className="hover:opacity-[.7] transition-opacity">
              <FaLinkedin  size={20} color="#FFF" />
            </a>

            <a href="#" target="_blank" className="hover:opacity-[.7] transition-opacity">
              <FaCode size={20} color="#FFF" />
            </a>
          </motion.div>
          
          <motion.div className="flex items-center gap-3">
            <button
              className="
                px-[14px]
                break-normal
                bg-[black]
                w-full
                max-w-[187px]
                h-[55px]
                flex
                items-center
                justify-center
                rounded-[75px]
                border
                border-[#585858]
                text-[15px]
                font-medium
                text-white
                transition-all
                hover:bg-white
                hover:text-[black]
              "
            >
              Currículo
            </button>

            <button
              className="
                px-[14px]
                break-normal
                bg-[black]
                w-full
                max-w-[187px]
                h-[55px]
                flex
                items-center
                justify-center
                rounded-[75px]
                border
                border-[#585858]
                text-[15px]
                font-medium
                text-white
                transition-all
                hover:bg-white
                hover:text-[black]
              "
            >
              Contatos
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
