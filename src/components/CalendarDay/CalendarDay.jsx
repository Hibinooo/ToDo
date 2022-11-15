import React from 'react';
import { useSelector } from 'react-redux'
import './CalendarDay.scss';
import CalendarDayTime from './CalendarDayTime/CalendarDayTime';


const CalendarDay = ({ day, id }) => {
  const timess = useSelector(state => state.times.times);
  console.log(timess)
  return (
    <div className='calendar_day'>
      <p className='calendar_day_header' >{day}</p>
      <div className='container_day_time'>
        {
          timess[1]?.map((time) => {
            if (id === time.dayId) {
              return <CalendarDayTime key={time.id} time={time} id={time.id} active={time.active} />;
            }
            else {
              return null
            }
          })
        }

      </div>
    </div>
  )

}

export default CalendarDay