import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Profile from './Profile'
import style from '../Style/profilepage.module.css'
import image from '../Image/Facebook_logo.jpeg'
import Setting from '../Image/Setting.png'
import {v4 as uuidv4} from "uuid";

const url="https://restcountries.com/v3.1/all";

const ProfilePage = () => {

  const [dataAll, setDataAll]=useState([]);
  const [filterData, setFilterData]=useState([]);

  const fetchData=async(url)=>{
      const response = await fetch(url);
      const data = await response.json();
      setDataAll(data);
      setFilterData(data);
      console.log(dataAll)
  
    }

  useEffect(()=>{
      fetchData(url);
    });

    const count=5;
  return (
    <>
    <div className={style.div1}>
        <div className={style.div2}>

           <div className={style.profile1}>
           <img src={image} alt={image} className={style.profile}/>
           </div>

           <div className={style.div3}>
           <div style={{display:"flex"}}>
            <div><h3>User name</h3></div>
            <div style={{margin:"auto"}}><button style={{border:"none"}}>Edit Profile</button></div>
            <div style={{margin:"auto 0px"}}><Link className={style.btn} ><img src={Setting} alt={Setting} className={style.Setting}/></Link></div>
           </div>

           <div style={{display:"flex"}}>
            <div><p>{count} Posts</p></div>
            <div><p style={{marginLeft:"15px"}}>{count} followers</p></div>
            <div><p style={{marginLeft:"15px"}}>{count} following</p></div>
           </div>
           <h2>Full name</h2>
           </div>
         
        </div>
        {/* <hr/> */}
    </div>

    <div className={style.div4}>
      <div style={{margin:"auto"}}><button style={{border:"none"}}>Posts</button></div>
      <div style={{margin:"auto"}}><button style={{border:"none"}}>Saves</button></div>
      <div style={{margin:"auto"}}><button style={{border:"none"}}>Tagged</button></div>
    </div>


    <div className={style.div5}>
    <section className={style.country} >
        {filterData.map((country)=>{ 
          const countrynew={country, id :uuidv4()}

        return <Profile {...countrynew} key={countrynew.id} />
         })}
      </section>
    </div>
    <div style={{margin:"auto",width:"50%",backgroundColor:"antiquewhite"}}>
      <h1 style={{textAlign:"center"}}>From here will be call Footer Component</h1>
    </div>
    
    </>
  )
}

export default ProfilePage
