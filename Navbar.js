import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Style/navbar.module.css'


// {/* <NavLink to="/login">Login</NavLink>
// <NavLink to="/registration">Registration</NavLink>
// <NavLink to="/ProfilePage">ProfilePage</NavLink> */}

const Navbar = () => {
  return (
    <nav>
      <div style={{height:"60px",display:"flex"}}>
     <div className={style.caption}><NavLink style={{textDecoration:"none"}}>Rising star</NavLink></div>
     <div className={style.searchBar}><input type='text' placeholder='Search' /></div>
     <div className={style.btn}><button>button</button></div>
      </div>
    </nav>
  )
}

export default Navbar
