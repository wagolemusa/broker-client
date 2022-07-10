import React from "react";  

const Login = () => {

    return(
        <div>
    <div class="pt-10 relative flex flex-col space-y-10 justify-center items-center">
    <div class="md:shadow-lg shadow-none rounded p-6 w-96" >
        <h1 class="text-3xl font-bold leading-normal" >Sign in</h1>
        <form class="space-y-5 mt-5">
            <div class="mb-4 relative">
                <input id="email" class="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:outline-none input active:outline-none" type="text" autofocus />
                <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Email or Phone</label>
            </div>
            <div class="relative flex items-center border border-gray-300 focus:ring focus:border-blue-500 rounded">
                <input id="password" class="w-full rounded px-3 pt-3 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" type="password"/>
                <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                
            </div>
            <div class="-m-2">
            </div>
            <button class="w-full text-center bg-teal-400 hover:bg-teal-500 duration-300 rounded-full text-white py-3 font-medium">Sign in</button>
        </form>
    </div>
</div>
        </div>
    )
}

export default Login;


