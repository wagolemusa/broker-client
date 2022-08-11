import React, { useEffect, useState } from "react";
import p1 from '../../asserts/p1.jpg'
import axios from "axios";
import { SiBytedance } from "react-icons/si";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";
import { TbPhoneCheck } from "react-icons/tb";
import { BsAt } from "react-icons/bs";
import Buy from "./Buy";
import Footer from "../footer/Footer";
import Relatd from "../Related";
import Sold from "../Sold";
import { useLocation } from 'react-router'
    
const Show = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [showdata, setShowdata] = useState([]);
  
    const getdatabyid = () => {
      axios.get('https://brokerback.herokuapp.com/api/' + path)
        .then((res) => {
          const myPost = res.data.post;
    
          setShowdata(myPost);
  
        })
    }
    useEffect(() => getdatabyid(), [path]);
    // console.log(showdata)   


    return (
        <>
        <div className='lg:container lg:mx-auto pb-10'>

        <div class="lg:grid lg:grid-cols-3 gap-4">
             <div class="col-span-2 ...">
                    <div class="showimg col-span-2">
                   
                    {/* <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                            
                    
                    <div class="carousel-inner relative w-full overflow-hidden">
                                   
                            {showdata.postPictures?.map(showpic => 

                                <div class="carousel-item active relative float-left w-full">

                                <img src={showpic.img} />
                                </div>
                              
                               
                                 )}
                                </div> 
                            <button
                                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div> */}

                            {/* {
                                     
                                showdata.postPictures?.map(showpic => {
  
                                 <img src={showpic.img} />
                                
                                 })
                            
                             } */}

                    {/* <img src={showdata.postPictures[0].img} /> */}

                    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div class="carousel-inner relative w-full overflow-hidden">
    {showdata.postPictures?.map(showpic => 


            <div class="carousel-item active float-left w-full">
                
                        <img src={showpic.img} class="block w-full"
                        alt="Wild Landscape" />
                    </div>
            
          
        
            )}
              </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                    
                    <h5 class="text-4xl pl-4 font-semibold tracking-tight text-gray-900 pb-5 dark:text-white pt-3">{showdata.title}</h5>
                    <p className="text-lg pl-4 font-bold text-gray-600 dark:text-white">
                   {showdata.description}
                    </p>
                </div>
            </div>

                <div>
                    <div className='bg-slate-800 drop-shadow-lg'>
                        <div class="text-white py-10 pr-11 pl-11">
                        <button class="w-full text-center  bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-3 font-medium">BUY SHELL</button>
                            <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-xl font-medium border-b border-gray-200 rounded-t-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-2  h-2 mr-2 fill-current text-lg">
                                <AiOutlineDribbble/>
                                </div>
                              {showdata.country}
                            </div>
                            <div class="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                                    <SiBytedance />
                                </div>
                                {showdata.city}
                            </div>
                            <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                                    <TbPhoneCheck />
                                </div>
                               
                              +244 725 690 642
                            </div>
                            <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-10  h-4 mr-2 fill-current text-lg">
                                    <BsAt />
                                </div>
                                info@korgroups.africa
                            </div>
                            <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium rounded-b-lg  hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-4  h-4 mr-2 fill-current text-sm">
                                    <BsCheckLg />
                                </div>

                                Approved by Korgroups
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <Relatd/>
        <Sold/>
        <Footer/>
        </>
    )
}

export default Show;

