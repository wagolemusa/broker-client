import React from "react";
import p1 from '../../asserts/p1.jpg'

import { SiBytedance } from "react-icons/si";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";
import { TbPhoneCheck } from "react-icons/tb";
import { BsAt } from "react-icons/bs";
import Buy from "./Buy";
import Footer from "../footer/Footer";
import Relatd from "../Related";
import Sold from "../Sold";
    
const Show = () => {
    return (
        <>
        <div className='lg:container lg:mx-auto pb-10'>

        <div class="lg:grid lg:grid-cols-3 gap-4">
             <div class="col-span-2 ...">
                    <div class="showimg col-span-2">
                    <img src={p1} class="rounded" alt="product image" />

                    <h5 class="text-4xl pl-4 font-semibold tracking-tight text-gray-900 pb-5 dark:text-white pt-3">Newly Refurbished Restaurant - Central Liverpool</h5>
                    <p className="text-lg pl-4 font-bold text-gray-600 dark:text-white">
                    the circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.
                    the circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.
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
                                Kenya
                            </div>
                            <div class="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                                    <SiBytedance />
                                </div>
                                Kisumu
                            </div>
                            <div className="proStyle relative inline-flex items-center w-full px-2 py-3 text-sm font-medium border-b border-gray-200 hover:text-teal-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <div className="icons w-4  h-4 mr-2 fill-current text-lg">
                                    <TbPhoneCheck />
                                </div>
                               
                                +254 725 696 042
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

