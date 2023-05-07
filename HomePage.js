import React, { useEffect, useState } from 'react'
import style from '../Style/homePage.module.css'
import {v4 as uuidv4} from "uuid";
import Home from './Home' 

const url="https://restcountries.com/v3.1/all";

const HomePage = () => {

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

  return (
    <>
    <div className={style.div1}>
    <section className={style.country} >
        {filterData.map((country)=>{ 
          const countrynew={country, id :uuidv4()}

        return <Home {...countrynew} key={countrynew.id} />
         })}
      </section>
    </div>
    </>
  )
}

export default HomePage
