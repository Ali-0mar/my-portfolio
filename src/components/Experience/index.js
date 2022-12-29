import { motion } from "framer-motion";
import './index.scss'
import  EducationCard  from "../EducationCard/EducationCard";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import { ExperienceData } from "../../data/ExperienceData.js";

const eduOpen = "<experience>";
const eduClose = "</experience>";

const Experience = () => {
  return (
    <div className='education'>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className='wrapper'>
          <h3 className='eduOpen'>{eduOpen}</h3>
          <div className='center_line'></div>
          {ExperienceData.map((item, index) => (
            <EducationCard
              key={item.title}
              title={item.title}
              date={item.date}
              details={item.details}
              isLeft={index % 2 === 0}
              first = {index === 0}
            />
          ))}
          <h3 className='eduClose'>{eduClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
