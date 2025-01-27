import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Job {
  id: number;
  enterprise: string;
  position: string;
  time: string;
  description: string;
  techs: { name: string }[];
}

export function Experience() {
  const { t } = useTranslation();

  const jobs = t("jobs", { returnObjects: true }) as Job[];

  const formatDescription = (description: string) => {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div
      className="flex items-center justify-center flex-col w-full max-w-[1200px] mx-auto mt-[60px] lg:mt-[105px] px-[20px]"
      id="experiencies"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none"
      >
        {t("titleExperiencies")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        {t("subTitleExperiencies")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-[30px] lg:mt-[55px] max-w-[1200px] w-full"
      >
        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={false}
          showArrows={true}
          autoPlay={true}
          interval={5000}
        >
          {jobs.map((item) => (
            
            <div key={item.id}>
              <div className="flex flex-col items-baseline justify-between sm:flex-row">
                <p className="flex flex-col items-baseline mb-2 text-[18px] font-normal font-[inter] text-[#FFFFFF] sm:flex-row ">
                  <strong className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF] pr-1">
                    {item.enterprise} /{" "}
                  </strong>
                  {item.position}
                </p>

                <p className="text-[14px] font-medium font-[inter] text-[#E1E1E1]">
                  {item.time}
                </p>
              </div>

              <p className="text-[14px] text-start font-medium font-[inter] text-[#E1E1E1] mt-[33px]">
                {formatDescription(item.description)}
              </p>

              <div className="flex gap-4 mt-[18px] flex-row flex-wrap">
              {item.techs.map((tech, index) => (
                <div
                  key={index}
                  className="relative rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500"
                >
                  <span className="block rounded-full bg-black px-4 py-2 text-[12px] font-normal font-[inter] text-[#E1E1E1]">
                    {/* @ts-ignore */}
                    {tech}
                  </span>
                </div>
              ))}
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}
