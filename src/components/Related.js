import React, { useEffect, useState } from 'react'
import axios from 'axios'
import b from  '../asserts/b.jpg'
import vb from '../asserts/vb.jpg'
import p1 from '../asserts/p1.jpg'
import Buy from './home/Buy'
import Buyshell from './buy/Buyshell'
import ReactPaginate from "react-paginate"

import { Link } from 'react-router-dom'
let token = localStorage.getItem('token')

const Relatd = () => {
    const [currentItem, setCurrentItem] = useState()
    const [pageCount, setPageCount ] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 4;
    const pagesVisted = pageCount * itemsPerPage;
    const [reated, setReated] = useState([]);

    const pageNumber = Math.ceil(reated.length / itemsPerPage)

    const displayUsers = reated
        .slice(pagesVisted, pagesVisted + itemsPerPage)
        .map((home) => {
            return(
                <>
             <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/show/${home._id}`}>
                <img src={home.postPictures[0].img} class="p-2 rounded-t-lg" alt="product image" />
            </Link>
            <div class="px-5 pb-5">
            <Link to={`/show/${home._id}`}>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">{home.title}</h5>
            </Link>
                <div class="flex items-center mt-2.5 mb-5">
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div class="flex justify-between items-center">

                <Link to={`/show/${home._id}`}class="text-1xl font-bold text-gray-500 dark:text-white"> Approved</Link>
                    <Buy/>
                </div>
            </div>
        </div>
                </>
            )
        })

  
    const getAlldata = () => {
        axios.get(`https://brokerback.herokuapp.com/api/country`)
        .then((res) => {
          const myPost = res.data.post;
          setReated(myPost);
        })
    }

    
    useEffect(() => {  
    }, getAlldata(),[]);
    console.log(reated)

    const changePage = ({ selected }) => {
        setPageCount(selected)
    };

    return (
        <div className='lg:container lg:mx-auto pt-11 pb-10'>
            <div className='lg:grid grid-cols-2 lg:grid-cols-4 relative gap-x-2 gap-y-16 px-4'>
                
                {displayUsers}
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageNumber}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
  
    )
}

export default Relatd;






