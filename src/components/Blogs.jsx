import React, { useContext,useEffect } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import Cards from './Cards';

function Blogs() {

  const { isLoading, blogPosts, fetchBlogs ,pageNumber} = useContext(AppContext);

  useEffect(() => {
    fetchBlogs(pageNumber);
  }, [pageNumber])

  return (
    <div className='flex items-center flex-col gap-8'>
      {
        isLoading ? (<Spinner />) : (blogPosts.map(blogpost => <Cards key={blogpost.id} {...blogpost} />))
      }
    </div>
  )
}

export default Blogs;