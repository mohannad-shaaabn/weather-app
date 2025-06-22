export default function Footer() {
  return (
    <div className='footer text-white min-h-44 py-12 px-36' style={{ backgroundColor: '#262936' }}>
      <div className='flex flex-row items-center justify-between mx-auto '>
        <form className="w-[60%]">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email to subscribe..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
          </div>
        </form>
        <div className="flex gap-4 w-[30%] justify-end ">
          <div className="w-10 h-10 flex items-center justify-center bg-brandblue text-blue-600 rounded-full shadow-md hover:bg-active hover:text-white cursor-pointer">
            <i className="fa-brands fa-facebook-f text-lg"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-brandblue text-blue-600 rounded-full shadow-md hover:bg-active hover:text-white cursor-pointer">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-brandblue text-blue-600 rounded-full shadow-md hover:bg-active hover:text-white cursor-pointer">
            <i className="fa-brands fa-google-plus-g"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-brandblue text-blue-600 rounded-full shadow-md hover:bg-active hover:text-white cursor-pointer">
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <h5 className='text-sm text-gray-400'>Copyright 2014 Company name. Designed by Themezy. All rights reserved</h5>
      </div>
    </div>
  );
}
