import React from 'react'
import style from '../Style/profile.module.css'

const Profile = (props) => {
    const {country}=props;
    const {name,flags}=country;
  return (
    <div className={style.div1}>
      <img src={flags.png} alt={name.common} className={style.flag}/>
      
    </div>
  )
}

export default Profile
