import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-[1200px] mx-auto mt-[60px] px-[20px] lg:mt-[105px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[40px] leading-none"
      >
        About me
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        Explore now
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[14px] font-normal text-[#E1E1E1] font-[inter] mt-[27px] text-center lg:text-[17px]"
      >
        As a passionate software engineer, I thrive on the intricate dance
        between logic and creativity. Currently immersed in the dynamic world of
        WebHR, my expertise centers around React Native, where I seamlessly
        blend technology with innovation. <br /> <br />
        With a fervor for crafting elegant solutions, I navigate the
        ever-evolving landscape of software development. My journey involves
        translating concepts into code, creating seamless user experiences, and
        constantly pushing the boundaries of what's possible
      </motion.p>
    </div>
  );
}
