import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'

function Cards({ title, tags, content, author, category, date }) {


    return (
        <div className='md:w-5/12 w-11/12 shadow-lg shadow-gray-600 px-4 py-4 my-1'>
            <div className="">
                <h1 className='font-bold text-black text-2xl py-2 font-[kanit]'>{title}</h1>
                <p className=' py-1'>By <i>{author}</i></p>
                <h3 className='font-[Cinzel] font-bold tracking-wider text-red-500'>Posted on <span>{date}</span></h3>
            </div>
            <div>
                <p className='font-[Merriweather] py-3'>{content}</p>
            </div>
            {
                tags.map(tag => (<span className='text-blue-600 font-[Signika_Negative] '>{`#${tag}`}</span>))
            }
        </div>
    )
}

export default Cards