import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-brandblue">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://routeweather.netlify.app/images/logo@2x.png" className="h-8" alt="Flowbite Logo" />
      <div className='flex flex-col'>
      <span className="self-start text-sm font-semibold whitespace-nowrap dark:text-white">Weather</span>
      <span className="self-center text-[12px] text-gray-600  whitespace-nowrap dark:text-gray-400">tagline goes here</span>
      </div>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-brandblue">
        <li>
          <NavLink to="/" className={(x)=>x.isActive?"text-active border rounded-full px-3 py-1 border-active" :"block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-white "} aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news" className={(x)=>x.isActive?"text-active border rounded-full px-3 py-1 border-active" :"block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-white "} aria-current="page">News</NavLink>
        </li>
        <li>
          <NavLink to="/livecameras" className={(x)=>x.isActive?"text-active border rounded-full px-3 py-1 border-active" :"block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-white "} aria-current="page">Live cameras</NavLink>
        </li>
        <li>
          <NavLink to="/photos" className={(x)=>x.isActive?"text-active border rounded-full px-3 py-1 border-active" :"block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-white "} aria-current="page">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={(x)=>x.isActive?"text-active border rounded-full px-3 py-1 border-active" :"block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-white "} aria-current="page">Contact</NavLink>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
