import React from 'react'
import style from '../Style/home.module.css'

const Profile = (props) => {
    const {country}=props;
    const {name,flags,capital,population,area}=country;
    const time=12;
    // const Likes=2;
    const comment="Love it";

//     const handleRemoveData =(name)=>{
//       props.onRemoveCountry(name);
//  }
    
  return (
    <div>
    <div className={style.card}> 
    <div style={{display:"flex"}}>
      <div><img src={flags.png} alt={name.common} className={style.flag}/></div>
      <div><h4>{capital} . {time}m</h4></div>
      <div><button className={style.btn}>...</button></div>
      </div>
    <img src={flags.png} alt={name.common} className={style.flag2}/>
    <div style={{display:"flex"}}>
    <div><button>Love</button></div>
    <div><button>Comment</button></div>
    <div><button>Share</button></div>
    <div><button style={{marginLeft:"280px"}}>Save</button></div>
    </div>
    <div>
      <h4>{area} Likes</h4>
      <h5>{name.common} {comment}</h5>
      <p>View all comments {population}</p>
      <input type='text' placeholder='Add a comment' style={{border:"none"}}/>
    </div>
    {/* <button className={style.btn2} onClick={()=>{handleRemoveData(name.common)}}>Delete</button> */}
    <hr/>
  </div>
  </div>
  )
}

export default Profile
