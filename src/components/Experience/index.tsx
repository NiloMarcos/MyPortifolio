import { motion } from "framer-motion";

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Experience() {
  const jobs = [
    {
      id: 1,
      enterprise: "BETC HAVAS",
      position: "Junior Frontend Developer",
      time: "Jan 2022 - Abr 2022, São Paulo",
      discription: (
        <>
          Colaborei no time de criação com foco em desenvolvimento de emails marketing com low code. <br /><br />
          Desenvolvimento e manutenção de emails marketing personalizados. <br /><br />
          Implementação de emails responsivas e otimizados para uma melhor experiência do usuário.
        </>
      ),
      techs: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      id: 2,
      enterprise: "Econverse",
      position: "Junior Frontend Developer",
      time: "Jun 2022 - Set 2022, São Paulo",
      discription: (
        <>
          Colaborei no time de projetos com foco em implementação e evolução de sites e-commerce. <br /><br />
          Desenvolvimento e manutenção de soluções personalizadas. <br /><br />
          Implementação de interfaces responsivas e otimizadas para uma melhor experiência do usuário
          (UX).
        </>
      ),
      techs: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "TypeScript" },
        { name: "SASS" },
        { name: "GIT" },
        { name: "VTEX IO" },
      ],
    },
    {
      id: 3,
      enterprise: "Cadastra",
      position: "Junior Frontend Developer II",
      time: "Out 2022 - Jun 2024, São Paulo",
      discription: (
        <>
          Colaborei no time de projetos com foco em implementação e evolução de sites e-commerce, trabalhando no LATAM ( Time Espanhol ) <br /><br />
          Desenvolvimento e manutenção de soluções personalizadas. <br /><br />
          Implementação de interfaces responsivas e otimizadas para uma melhor experiência do usuário
          (UX). <br /><br />
          Correção de bugs e melhorias contínuas para garantir alta performance e estabilidade das
          aplicações. <br /><br />
          Participação ativa em reuniões de planejamento e definição de requisitos técnicos e funcionais.
        </>
      ),
      techs: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "TypeScript" },
        { name: "SASS" },
        { name: "GIT" },
        { name: "VTEX IO" },
      ],
    },
    {
      id: 4,
      enterprise: "Quick Digital",
      position: "Frontend Developer",
      time: "Jun 2024 - Presente, Rio De Janeiro",
      discription: (
        <>
          Colaboro no time de projetos com foco na evolução de sites e-commerce.<br /><br />
          Desenvolvimento e manutenção de soluções personalizadas.<br /><br />
          Implementação de interfaces responsivas e otimizadas para uma melhor experiência do
          usuário (UX).<br /><br />
          Correção de bugs e melhorias contínuas para garantir alta performance e estabilidade das
          aplicações.<br /><br />
          Participação ativa em reuniões de planejamento e definição de requisitos técnicos e
          funcionais.
        </>
      ),
      techs: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "TypeScript" },
        { name: "SASS" },
        { name: "GIT" },
        { name: "VTEX IO / CMS" },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col w-full max-w-[1200px] mx-auto mt-[60px] px-[20px] lg:mt-[105px]" id="experiencies">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none"
      >
        Expêriencias
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        Minhas expêriencias profissionais
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
                  <strong className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF]">
                    {item.enterprise} /{" "}
                  </strong>
                  {item.position}
                </p>

                <p className="text-[14px] font-medium font-[inter] text-[#E1E1E1]">
                  {item.time}
                </p>
              </div>

              <p className="text-[14px] text-start font-medium font-[inter] text-[#E1E1E1] mt-[33px]">
                {item.discription}
              </p>

              <div className="flex gap-4 mt-[18px] flex-row flex-wrap">
                {item.techs.map((tech, index) => (
                  <div
                    key={index}
                    className="relative rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500"
                  >
                    <span className="block rounded-full bg-black px-4 py-2 text-[12px] font-normal font-[inter] text-[#E1E1E1]">
                      {tech.name}
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
