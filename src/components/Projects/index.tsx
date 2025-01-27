
import { motion } from "framer-motion";

import bg from '../../assets/bg-project.png';

import { useTranslation } from 'react-i18next';

export function Projects() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2}}
      id="projects"
      className="flex items-center justify-center flex-col w-full max-w-[1240px] mx-auto mt-[60px] px-[20px] lg:mt-[105px]"
    >
      <p 
        className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[30px] leading-none"
      >
        {t('titleProject')}
      </p>
      
      <a 
        href="https://github.com/NiloMarcos/" 
        target="_blank"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase"
      >
        {t('subTitleProject')}
      </a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
        className='flex flex-wrap w-full lg:flex-nowrap items-center justify-center gap-3 my-7 lg'
      >
        <div className='border border-[#141414] p-4 rounded-3xl'>
          <img src={bg} alt="BG - Projeto" className='w-full rounded-3xl' />

          <p className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF] mt-6">{t('nameOfProject')}</p>
          <span className='text-[14px] font-normal font-[inter] text-[#FFFFFF] mt-4'>{t('descriptionOfProject')}</span>
        </div>
        
        <div className='border border-[#141414] p-4 rounded-3xl'>
          <img src={bg} alt="BG - Projeto" className='w-full rounded-3xl' />

          <p className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF] mt-6">{t('nameOfProject')}</p>
          <span className='text-[14px] font-normal font-[inter] text-[#FFFFFF] mt-4'>{t('descriptionOfProject')}</span>
        </div>
        
        <div className='border border-[#141414] p-4 rounded-3xl'>
          <img src={bg} alt="BG - Projeto" className='w-full rounded-3xl' />

          <p className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF] mt-6">{t('nameOfProject')}</p>
          <span className='text-[14px] font-normal font-[inter] text-[#FFFFFF] mt-4'>{t('descriptionOfProject')}</span>
        </div>
        
        <div className='border border-[#141414] p-4 rounded-3xl'>
          <img src={bg} alt="BG - Projeto" className='w-full rounded-3xl' />

          <p className="text-[18px] font-extrabold font-[inter] text-[#FFFFFF] mt-6">{t('nameOfProject')}</p>
          <span className='text-[14px] font-normal font-[inter] text-[#FFFFFF] mt-4'>{t('descriptionOfProject')}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}