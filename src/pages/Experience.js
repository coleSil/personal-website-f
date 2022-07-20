import React from 'react';
import {
  VerticalTimeLine, 
  VerticalTimeLineElement
} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeLine lineColor=''>
        <VerticalTimeLineElement 
          className='vertical-timeline-element--education'
          date='2010-2014'
          iconStyle={{background: ''}}>
            <h3>blah blah name </h3>
        </VerticalTimeLineElement>
      </VerticalTimeLine>
    </div>
  )
}

export default Experience;