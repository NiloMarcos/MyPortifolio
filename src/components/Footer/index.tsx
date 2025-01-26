import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="flex items-center justify-center w-full max-w-[1200px] mx-auto pb-5 my-[30px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-white text-[12px] text-sm lg:text-[12px] font-normal"
      >
        <a href="https://www.linkedin.com/in/nilomarcos/" target="_blank">
          © Nilo Marcos - Todos os direitos reservados.
        </a>
      </motion.p>
    </div>
  );
}
