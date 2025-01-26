import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-[1200px] mx-auto mt-[60px] lg:mt-[105px] px-[20px]" id="about">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none"
      >
        Sobre mim
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent pt-2 bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        Conheça-me melhor
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[14px] font-normal text-[#E1E1E1] font-[inter] mt-[27px] text-justify sm:text-center lg:text-[17px]"
      >
        Desenvolvedor Front-end com 3 anos de experiência na criação de interfaces web responsivas e dinâmicas. Sou formado em Análise e Desenvolvimento de Sistemas pela Faculdade UniFecaf, onde iniciei meus estudos e minha carreira como desenvolvedor. <br /><br />

        Durante minha carreira, já atuei em equipes remotas e híbridas, o que me permitiu aprimorar minha comunicação e trabalho em equipe. Sou detalhista e proativo, sempre em busca de soluções criativas para desafios técnicos. Além disso, valorizo o aprendizado contínuo e me dedico a me manter atualizado com as melhores práticas e tecnologias emergentes no mercado.
      </motion.p>
    </div>
  );
}
