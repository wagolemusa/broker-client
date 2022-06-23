import React from "react";
import Navbar from "../navbar/Navbar";
import Button from "../Button";
import Footer from "../footer/Footer"
import Cards from "../Cards";

const Home = () => {
    return(
      <div>
        <section
        className="h-screen bg-sky-200 bg-cover
        font-[Poppins] md:bg-top bg-center"
      >
     
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
            Items every woman should have
          </h1>
          <div className="text-xl">
            <Button />
          </div>
        </div>

   
      </section>
      <Cards />
        <Footer/>
      </div>
    
     
    )
}

export default Home;
