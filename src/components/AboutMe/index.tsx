import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <div
      className="flex items-center justify-center flex-col w-full max-w-[1200px] mx-auto mt-[60px] lg:mt-[105px] px-[20px]"
      id="about"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none"
      >
        {t("titleAboutMe")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent pt-2 bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        {t("subTitleAboutMe")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[14px] font-normal text-[#E1E1E1] font-[inter] mt-[27px] text-justify sm:text-center lg:text-[17px]"
      >
        {t("aboutMe")
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </motion.p>
    </div>
  );
}
