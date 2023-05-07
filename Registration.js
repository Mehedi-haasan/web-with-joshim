import React,{useState} from 'react'
// import { FaFacebookSquare } from "react-icons/fa";
import {NavLink,useNavigate } from "react-router-dom";
import style from '../Style/registratio.module.css'
import googleplay from '../Image/googleplay.png'
import microsoft from '../Image/microsoft.png'
import facebook_logo from '../Image/Facebook_logo.jpeg'

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');

  const usenavigate=useNavigate();

  function goToLogin (){
    usenavigate("/");
   }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFulnameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password},FullName: ${fullname}, Email: ${email} `);
  };


  return (
    <>
   <div className={style.div1}>
    <h1 style={{textAlign:"center"}}>Rising Star</h1>
  <h3 style={{textAlign:"center",color:"light-Black"}}>Sign up to see photos and videos from your friends.</h3>

  <div className={style.NavLink}>
  <NavLink ><img src={facebook_logo} alt='facebook_logo' className={style.facebooklogo}/> </NavLink>
        <NavLink style={{marginTop:"0px", textDecoration:"none"}}>Log in with Facebook</NavLink>
    </div>

  <hr style={{margin:"15px"}}/>
  <div ><input type='email' placeholder='Mobail Number or Email' className={style.email_input} onChange={handleEmailChange}/></div>

  <div> <input type='text' placeholder='Full Name' className={style.fullname_input} onChange={handleFulnameChange}/> </div>

  <div><input type='text' placeholder='Username' className={style.username_input} onChange={handleUsernameChange}/></div>
  <div><input type='password' placeholder='Password' className={style.password_input} onChange={handlePasswordChange}/></div>
  <div><p style={{textAlign:"center"}}>People who use our service may have uploaded your contact information to Instagram.</p></div>
  <div><p style={{textAlign:"center"}}>By signing up, you agree to our Terms </p></div>

  <div><button className={style.btn} onClick={handleSubmit }>Sign up</button></div>


   </div>
   <div className={style.div2}>
   <p style={{textAlign:"center"}}>Have an account? <button onClick={goToLogin} style={{textDecoration:"none",border:"none",backgroundColor:"white"}}>Log in</button></p>
   </div>
   <div className={style.div3}>
    <div><p className={style.p}>Get the app.</p></div>
    <div>
    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7B2E71CA-08F9-4388-A054-BAB7E7CC5951%26utm_content%3Dlo%26utm_medium%3Dbadge" >
           <img src={googleplay} alt="googleplay" className={style.googleplay}/>
        </a>
        <a href="https://example.com" >
           <img src={microsoft} alt="googleplay" className={style.microsoft}/>
        </a>
    </div>

   </div>
    </>
  )
}

export default Registration
