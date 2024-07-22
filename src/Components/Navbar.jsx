import React, { useContext } from 'react'
import { themecontext } from './Context'
import Button from './Button'

const Navbar = () => {

  const { theme } = useContext(themecontext)
  return (
    <div>

      <nav style={{ width: '35%' }}>
        <ul className='d-flex list-unstyled justify-content-around pt-2'><li>
          <a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">contact</a></li>
          <li><a href="">Service</a></li>
        </ul>

      </nav>

      <div style={{ float: "right", marginTop: "-35px" }}><Button /></div>  <br />
      <span>The Theme Is {theme}</span>

    </div>
  )
}

export default Navbar
