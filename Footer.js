import React from 'react'
import { NavLink } from 'react-router-dom'
// import style from '../Style/footer.module.css'

const Footer = () => {
  return (
    <nav>
      <div style={{height:"60px",display:"flex"}}>
     <div ><NavLink to="/ProfilePage" style={{textDecoration:"none"}}>Rising star</NavLink></div>
      </div>
    </nav>
  )
}

export default Footer
