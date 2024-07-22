import React, { useContext } from 'react'
import { themecontext } from './Context'
import "./style.css"

const Button = () => {

  const { toggleTheme } = useContext(themecontext);

  return (
    <button class="switch" id="toggleButton" onClick={toggleTheme}></button>


  )
}

export default Button
