import React from 'react'
import { useSelector } from 'react-redux';
import '../../../Style/FinalResume/Experience.css'

export default function Experience() {
  let obj = useSelector((state) => state.ExperienceReducer);
  return (
    <>
    <div className='tag'>EXPERIENCE</div>
     <div className='job-title'>{obj.job_title}</div>
     <div className='company'>Company :  {obj.company}</div>
     <div className='city'>{obj.city}, {obj.country}</div>
     <div className='experience-time'>
       <p>from :{obj.date1}</p>
       <p>to :{obj.date2}</p>
     </div>
    </>
  )
}
