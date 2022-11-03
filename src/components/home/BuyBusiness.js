import React, {  useState } from "react";
import axios from 'axios'
import { BsCheckLg } from "react-icons/bs";

let token = localStorage.getItem('token')
const BuyBusiness = () => {

    const styles = {
        header: `font-bold font-black text-3xl font-extrabold  text-slate-900 pb-8`,
        title: `proStyle relative inline-flex items-center w-full px-2 py-3 text-xl
        inline-block text-1xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-medium`,
        body: `text-base font-bold text-gray-500 dark:text-white  pl-11 pb-3`
    }

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = {
            firstname,
            lastname,
            phone,
            email,
            country,
            city
        }
      
        const response = await axios.post("https://brokerback.herokuapp.com/api/buyer", dataForm, {
            headers: {
                'Authorization': token,
                 'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .catch((err) => {
                console.log(err.response.data)
              if (err && err.response) setError(err.response.data.message);
              setSuccess(null);
            });
  
              if (response && response.data) {
              setError(null);
              setSuccess(response.data.message);
              }
              if(response.status === 201){
                window.location.replace('/');
               }
  
               if (response?.data?.errors){
                   const messages = response.data.errors.map(item => item.msg)
                   
                   setError(messages)
               }   
    }

    return (
        <section>
            <br/>
            <div className="buyback">

                <div className="grid grid-cols-2 gap-3">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">                       
                       <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-sm font-medium  text-center leading-normal text-gray-600" id="exampleModalFullscreenLabel">
                                Buy with Korgroups blockers
                            </h5>
                        </div>
                        {!error && 
                        <div className='suc'>
                        {success ? success : ""}
                    </div>}

                    {!success && Array.isArray(error) ? error.map((item, i) => (
                        <div className="notice notice-danger alert fade show" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 key={i}> {item} </h4>
                        </div>
                    )) : <p>{error} </p>
                    } 

                        <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="Firstname">
                                    Firstname
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Firstname"
                                 onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                                    Lastname
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Lastname" 
                                 onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"
                                     onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="phone Number">
                                    Phone Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone Number" 
                                 onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
                                    country
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country" 
                                     onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="city">
                                    City
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" 
                                 onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                    

                            <div className="flex items-center justify-between">
                                <button type="submit"  className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Buy petrol station
                                </button>

                            </div>
                        </form>
                    </div>
                 
                <div>
                <div className="buyback1">
                <div className="lg:grid lg:grid-cols-3 gap-4 pt-8 pb-8 pr-11 sm:pl-20">
                <div className="col-span-2 ...">

                <h2 className={styles.header}>Why do you trust Korgroups Blockers</h2>
                
                <h3 className={styles.title}>
                <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                <BsCheckLg />
                </div>
                    Best Price
                    
                </h3>
                <p className={styles.body}>We make sure both buyer and seller agree on the best price.</p>
                
                <h3 className={styles.title}>
                    <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                    <BsCheckLg />
                        </div>
                    Legal Docements
                </h3>
                <p className={styles.body}>Our loyers prove the documents with titled </p>
                
                <h3 className={styles.title}>
                <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                <BsCheckLg />
                        </div>
                    Instant Cash
                </h3>
                <p className={styles.body}>Instant Cash on your preferred mode of payment</p>

                    <div className={styles.title}>
                        <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                        <BsCheckLg />
                        </div>
                            Kenya
                               
                        </div>
                        <p className={styles.body}>Instant Cash on your preferred mode of payment</p>

                        </div>
          
            </div>

                </div>
        </div>
                </div>
            </div>
          
        </section>
    )
}

export default BuyBusiness;