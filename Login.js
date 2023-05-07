// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik';
import * as yup  from 'yup';
// import { FaFacebookSquare } from "react-icons/fa";
import {Link,NavLink } from "react-router-dom";
import logo from '../Image/home-phones.png'
import style from '../Style/login.module.css'
import googleplay from '../Image/googleplay.png'
import microsoft from '../Image/microsoft.png'
import facebook_logo from '../Image/facebook_logo.png'
// import './App.css';

function Insta() {

  const goToRegistration=useNavigate();
  const goToProfilePage=useNavigate();

  const formik=useFormik({
    initialValues : {
      email:"",
      password:"",
    },
    validationSchema:yup.object({
      email:yup.string().email().required(),
      password:yup.string().min(6, "password must have atleast 6").required(),
    }),
    onSubmit:(values, {resetForm})=>{
      console.log(values)
      resetForm({values:""});
      goToProfilePage("/profilepage");
    }
  }) 



 function goToLogin (){
  goToRegistration("/registration");
  }





  return (
    <div className={style.container}>

       <div className={style.phone}>
          <img src={logo} alt='logo'/>
       </div>

       <div>
       <form onSubmit={formik.handleSubmit}>
       <div className={style.login}>
       <h1 className={style.hedding}>Rising Star</h1>

       <div>
        <input 
        className={style.inputemail}
         type='email' 
         value={formik.values.email} 
         name='email'
         id='email' 
         placeholder='Phone number, User name or email'
         required
        onChange={formik.handleChange}
        />
        {/* {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p> } */}
        </div>

       <div>
        <input 
        className={style.inputpassword}
         type='password' 
         required
         value={formik.values.password} 
         name='password' 
         id='password' 
         placeholder='Password' 
         onChange={formik.handleChange}
         />
         {/* {formik.touched.password && formik.errors.password && <p>password must have atleast 6</p> } */}
        </div>

       <div>
        <button className={style.loginbutton} onClick={formik.handleSubmit} type='submit' >Log in</button>
       </div>

       <br/>
    <div style={{display:"flex"}}>
    <hr style={{width:"100px",marginRight:"7px",height:"1px"}}/>OR<hr style={{width:"100px", marginLeft:"7px"}}/> 
    </div>
       <br/>
       <div style={{display:"flex"}}>
        <NavLink className={style.NavLink}><img src={facebook_logo} alt='facebook_logo' className={style.facebooklogo}/> </NavLink>
        <NavLink style={{marginTop:"4px", textDecoration:"none"}}>Log in with Facebook</NavLink>
        </div>
       <div><Link className={style.Link}><p style={{fontSize:"12px"}}>Forgot password?</p></Link></div>
      </div>
       </form>
       <div className={style.div2}>
        <p className={style.Link}>Don't have an account? <button onClick={goToLogin} style={{textDecoration:"none",border:"none",backgroundColor:"white"}}>Sing up</button></p>
       </div>
       <div>
        <p className={style.Link}>Git the App.</p>
       </div>
       <div>
       <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7B2E71CA-08F9-4388-A054-BAB7E7CC5951%26utm_content%3Dlo%26utm_medium%3Dbadge" >
           <img src={googleplay} alt="googleplay" className={style.googleplay}/>
        </a>
        <a href="https://example.com" >
           <img src={microsoft} alt="googleplay" className={style.microsoft}/>
        </a>

       </div>

       </div>
    </div>
  );
}

export default Insta;
