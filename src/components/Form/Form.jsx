import React from "react";
import { Link } from 'react-router-dom';
import Button from "./Button";
import style from './Form.module.scss'

const Form = () => {
  return (
    <div className={style.container}>
      <input className={style.input} type="text" name="login" id="login" placeholder="Login"/>
      <input className={style.input} type="password" name="password" id="password" placeholder="Password"/>
      <Button/>
      
      <Link to='/'>Home</Link>
      <Link to='/register'>register</Link>
    </div>
  )
}
export default Form