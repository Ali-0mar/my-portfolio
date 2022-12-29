import { IoIosSchool } from 'react-icons/io';

import './educationCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faSearch } from '@fortawesome/free-solid-svg-icons'


const EducationCard = (props) => {
console.log(props)
  return (
    <div className={`row ${props.isLeft ? 'row_1' : 'row_2'}`}>
      <section>
        {
          props.first ?
            <>
              <FontAwesomeIcon icon={faRefresh} className='icon' spin={true}/>
            <div className='details'>
              <p>
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: '25px', marginRight: '20px' }} />
                Seeking a new Adventure
              </p>
            </div>
            </>:
            <>
              <IoIosSchool className='icon' />
              <div className='details'>
                <span className='title'>{props.title}</span>
                <span className='date'>{props.date}</span>
              </div>
              {props.details.map((item) => (
                <p key={item}>◉ {item}</p>
              ))}
            </>
        }
      </section>
    </div>
  );
};

export default EducationCard ;
