import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, achievements, certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institute, result }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='green-pink-gradient p-[1px] rounded-[20px] shadow-card xs:w-[320px] w-full'
  >
    <div className='bg-tertiary rounded-[20px] p-6 h-full flex flex-col gap-2'>
      <h3 className='text-white text-[20px] font-bold'>{degree}</h3>
      <p className='text-secondary text-[16px] font-semibold'>{institute}</p>
      <p className='blue-text-gradient text-[14px]'>{result}</p>
    </div>
  </motion.div>
);

const ListCard = ({ index, title, items }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-black-100 rounded-2xl p-8 flex-1 min-w-[280px]'
  >
    <h3 className='text-white text-[24px] font-bold'>{title}</h3>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {items.map((item) => (
        <li
          key={item}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Credentials = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Learning and milestones</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-12 flex flex-wrap gap-7'>
        {education.map((item, index) => (
          <EducationCard key={item.degree} index={index} {...item} />
        ))}
      </div>

      <div className='mt-12 flex flex-wrap gap-7'>
        <ListCard index={0} title='Achievements' items={achievements} />
        <ListCard index={1} title='Certifications' items={certifications} />
      </div>
    </>
  );
};

export default SectionWrapper(Credentials, "education");
