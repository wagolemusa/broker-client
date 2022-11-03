import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import log from "../../../src/asserts/log.png"
import Sellshell from "../sell/Sellshell";
import {  useSelector } from 'react-redux'


const  Navbar3 = () =>{


    const [navbar, setNavbar] = useState(false);
	
	const auth = useSelector(state => state.auth)
  
	const logout = () => {
	  window.localStorage.clear();
	  window.location.replace('/');
	}
  
	const renderLoginLinks = () => {
	  return(
		<span button class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={logout}>
		Logout
	  </span>
	  )
	}
  
	const renderNonLoggedLinks = () => {
	  return(
		<>
		  <a href="/login" className="text-white pt-10  font-extrabold text-sm">
			 Login
		  </a> 
		</>
		
	  )
	}
  
	const renderButton = () => {
	  return(
		<Button />
	  )
	}
	

    return (
		<div>
			  <section className="justify-between items-center">
					<div className="bg-gray-800 h-14">
					
					<ul className="flex">
					<li className="care text-white pt-3 pl-10 font-extrabold text-sm">Customer Care  +254 725 696 042</li>
					<div className="login">
				
					<li> 
					{auth.authenticate ?  '': renderNonLoggedLinks()}

					</li>
				

					</div>
					</ul>
					</div>
				</section>

        <nav className="sticky top-0 z-30 w-full  bg-white shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
					<Link to="/" >
						<img src={log} alt="logo" className="md:cursor-pointer h-9" />
					</Link>
						
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-teal-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-teal-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1  pb-2 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-4 md:flex md:space-x-5 md:space-y-0">
						<li className="nav-item ">
						<Link to="/">
								HOME
							</Link>
							</li>
							<li class="nav-item">
							<Link to="/about">
								ABOUT US
							</Link>
							</li>
							<li class="nav-item">
							<Link to="/buy">
									BUY A BUSINESS
							</Link>
							</li>
							<li className="nav-item cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen1">
								SELL A BUSINESS
							</li>
                        </ul>

                    <div className="mt-3 space-y-2 lg:hidden md:inline-block">
					<div class="flex items-center relative">

					{auth.authenticate ?  renderLoginLinks() : renderButton()}
					
					</div>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
				<div class="flex items-center relative">

					{auth.authenticate ?  renderLoginLinks() : renderButton()}
					
					</div>
                </div>
            </div>
        </nav>

		<div class="shadow bg-body rounded modal fade fixed top-0 lg:right-0 hidden lg:w-1/3 h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalFullscreen1" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
             
              <button type="button"
                  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">
                  Close
                </button>
            </div>
            <h5 className="sell text-slate-500 text-center" id="exampleModalFullscreenLabel">
                Korgroups blockers connects you with a good Buyer.
              </h5>

              <Sellshell/>
           
          </div>
        </div>
      </div>
		</div>
    );
}

export default Navbar3