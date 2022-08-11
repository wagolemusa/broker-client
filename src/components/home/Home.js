import React, { useState, useEffect } from "react";
import axios from 'axios'
import Navbar from "../navbar/Navbar";
import Button from "../Button";
import Footer from "../footer/Footer"
import Cards from "../Cards";
import Trust from "./Trust";
import x from '../../asserts/x.png'
import xx from '../../asserts/xx.png'
import xc from '../../asserts/xc.png'
import { matchRoutes } from "react-router-dom";
let token = localStorage.getItem('token')

const Home = () => {



    const [getcoutry, setGetcoutry] = useState([]);

    const getcoutrydata = () =>{
      axios.get('https://brokerback.herokuapp.com/api/country', {
        headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          const myseller = res.data.post;
          setGetcoutry(myseller);

        })
    }
    useEffect(() => getcoutrydata(), []);
    // console.log(getcoutry);



  const styles =  {
    secdev: `text-center`,
    secdevTitle: `text-2xl pb-4 pt-5 font-extrabold`,
    secdevText: `text-sm font-bold text-gray-600 dark:text-white`
  }


    return(
      <section>
        <section className="homesection pt-11 text-white font-sans font-bold bg-slate-900">
            <div className="pt-11 pb-20">

            <h1
              className="text-5xl lg:text-2  md:mb-0 mb-8 lg:leading-normal font-extrabold 
                 text-center"
              >
              <span className="text-teal-400">Korgroups</span> Business Brokers
            </h1>
            <p className="text-center pt-2 text-2xl">Sell / Buy petrol stations with Korgroups brokers</p>
            </div>
           
      </section>

      <section className="homecard md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center h-full pl-10 sm:pl-0">
          <div class="md:shadow-lg p-6 w-92 bg-white rounded-lg shadow-md" >
              <h1 class="text-2xl font-bold leading-normal text-center ">Sell Petrol Stations</h1>
              <form class="space-y-5 mt-5">
                  <div class="mb-4 relative">
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="DE">select Country</option>
                  { getcoutry?.map((coutry) => {
                    return(
                     
                      <option value="DE">{coutry.country}</option>
                    )
                  })
                 
                  }
                  </select>
                  </div>
                  <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="DE">select City</option>
                  { getcoutry?.map((coutry) => {
                    return(
                     
                      <option value="DE">{coutry.city}</option>
                    )
                  })
                 
                  }
                  </select>
                  </div>

                  <button class="w-full text-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-2 font-medium">Sell New</button>
              </form>
          </div>
          
          </div>
    </section>

<section>
  <h2 className="hometitle text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">Sell your Petrol Stations in 3 Steps</h2>
  <div className='lg:container lg:mx-auto sm:p-20'>
  <div className='lg:grid grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8'>

        <div className="text-center">
        <div className="imgcard">
        <div className={styles.secdev}>
          <center>
          <img src={x}  alt="product image" />
          </center>
          
        </div>
        <h2 className={styles.secdevTitle}>1.Click on Sell </h2>
        <p className={styles.secdevText}>Complate the signup process and post your petrol station, Korgroups will approve with you</p>
      </div>
      </div>
      <div className={styles.secdev}>

      <div className="imgcard">
          <center>
          <img src={xx} alt="product image" />
          </center>
        </div>
        <h1 className={styles.secdevTitle}>2.Connect</h1>
        <p className={styles.secdevText}>Connect with Korgroups and the buyer  for the negosetion</p>
      </div>
      <div className={styles.secdev}>
      <div className="imgcard">
        <center>
        <img src={xc}  alt="product image" />
        </center>
        </div>
        <h1 className={styles.secdevTitle}>3.Close Deal</h1>
        <p className={styles.secdevText}>Handle Docements to the buyer  and get payed with the help of our loyers</p>
      </div>
  </div>
  </div>

</section>

      <Cards />
      <Trust/>
        <Footer/>
      </section>
    
     
    )
}

export default Home;
