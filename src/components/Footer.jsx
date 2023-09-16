import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

function Footer() {
  const { setpageNumber, pageNumber, TotalPages, isLoading } = useContext(AppContext)

  function prevPage() {
    if (pageNumber > 1 && !isLoading) {
      setpageNumber(prev => prev - 1)
    }
  }
  function nextPage() {
    if (pageNumber < TotalPages && !isLoading) {
      setpageNumber(prev => prev + 1)
    }
  }

  return (
    <div className={`${isLoading?'fixed bottom-0':'' } mt-4 flex justify-around w-full py-3 bg-gray-300`}>
      <div>
        <button
          disabled={pageNumber <= 1 ? true : false}
          onClick={prevPage}
          className=' px-4 py-1 bg-gray-500 text-white mx-2 font-bold rounded-xl outline-black outline-offset-2 outline-2 outline-double disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:outline-none active:outline-none'>Previous</button>
        <button
          disabled={pageNumber >= TotalPages ? true : false}
          onClick={nextPage}
          className=' px-4 py-1 bg-gray-500 text-white mx-2 font-bold rounded-xl outline-black outline-offset-2 outline-2 outline-double disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:outline-none active:outline-none'>Next</button>
      </div>
      <div className='text-black font-bold '>
        <p>Page {pageNumber} of {TotalPages}</p>
      </div>
    </div>
  )
}

export default Footer;