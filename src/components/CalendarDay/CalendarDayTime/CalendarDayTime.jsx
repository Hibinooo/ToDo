import React from "react";
import { useDispatch } from "react-redux";
import { toggleTime } from "../../../store/timeSlice";
import './calendarDayTime.css';
import axios from 'axios'

const CalendarDayTime = ({ time, id, active }) => {


  const dispath = useDispatch();




  const SetTime = (id, active) => {
    axios
      .patch('http://localhost:3001/times/' + id, {
        active: active
      })
      .catch(() => {
        alert('Не удалось обновить');
      });
  }

  return (
    <div className='calendarDayTime'>
      {

        <span className={active ? 'dayTime active' : 'dayTime'} onClick={() => {
          dispath(toggleTime({ id }))
          SetTime(id, !active)
          console.log(active + 'awa')
        }}>{time.time}</span>
      }

    </div>
  )
}

export default CalendarDayTime;