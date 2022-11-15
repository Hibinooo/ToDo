import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { LoginPage } from './page/LoginPage'
import { RegisterPage } from './page/RegisterPage'
import { useDispatch } from 'react-redux';
import { addTime } from './store/timeSlice';
import axios from 'axios';
import CalendarDay from './components/CalendarDay/CalendarDay';
import DB from './assets/db.json'
import style from './index.module.scss';

function App() {
  const [times, setTimes] = useState([])

  const dispath = useDispatch();
  const addTimes = () => dispath(addTime(times))


  useEffect(() => {
    axios
      .get('http://localhost:3001/times').then(({ data }) => { setTimes(data); console.log(data) });
  }, []);

  useEffect(() => {
    addTimes();
  }, [times]);

  return (

    <div className={style.container}>

      <header className={style.header}>
        {/* <button onClick={() => {addTimes()}}>Обновить</button> */}
        <Link to='/login'>Login</Link>

      </header>

      <Routes>
        <Route path='/' element={
          <div className={style.calendar}>{DB.days.map((day) => <CalendarDay key={day.id} id={day.id} day={day.name} />)} </div>
        } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

    </div>
  );


}

export default App;
