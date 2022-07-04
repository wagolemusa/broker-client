import React from "react";
import Navbar from "../navbar/Navbar";
import Button from "../Button";
import Footer from "../footer/Footer"
import Cards from "../Cards";

const Home = () => {

  const styles =  {
    secdev: `text-center`,
    secdevTitle: `text-3xl pb-4`,
    secdevText: `text-sm font-bold text-gray-600 dark:text-white`
  }


    return(
      <div>
        <section className="homesection pt-5 text-white font-sans font-bold bg-slate-900">
            <div className="pt-10 pb-20">

            <h1
              className="lg:text-5xl text-4xl md:mb-0 mb-8 lg:leading-normal font-semibold
                 text-center"
              >
              <span className="text-teal-400">Korgroups</span> Business Brokers
            </h1>
            
            </div>
            <p className="text-center pt-5 text-2xl">Sell / Buy petrol stations with Korgroups brokers</p>
      </section>

      <section className="md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center h-full pl-32">
    <div class="md:shadow-lg p-6 w-92 bg-white rounded-lg shadow-md" >
        <h1 class="text-2xl font-bold leading-normal text-center">Sell Petrol Stations</h1>
        <form class="space-y-5 mt-5">
            <div class="mb-4 relative">
                <input id="email" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" type="text" autofocus />
                <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Email or Phone</label>
            </div>
            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                <input id="password" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" type="password"/>
                <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                
            </div>

            <button class="w-full text-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-2 font-medium">Sell New</button>
        </form>
    </div>
    
    </div>
  
</section>

<section>
  <h2 className="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">Sell your Petrol Stations in 3 Steps</h2>
  <div className='lg:container lg:mx-auto pt-11 pb-10 pl-20'>
  <div className='lg:grid grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4'>
      <div className={styles.secdev}>
        <h2 className={styles.secdevTitle}>Click on Sell </h2>
        <p className={styles.secdevText}>Complate the signup process and post your petrol station, Korgroups will approve with you</p>
      </div>
      <div className={styles.secdev}>
        <h1 className={styles.secdevTitle}>Connect</h1>
        <p className={styles.secdevText}>Connect with Korgroups and the buyer  for the negosetion</p>
      </div>
      <div className={styles.secdev}>
        <h1 className={styles.secdevTitle}>Close Deal</h1>
        <p className={styles.secdevText}>Handle Docements to the buyer  and get payed with the help of our loyers</p>
      </div>
  </div>
  </div>

</section>

      <Cards />
        <Footer/>
      </div>
    
     
    )
}

export default Home;
