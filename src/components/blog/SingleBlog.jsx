import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';



const SingleBlog = () => {
    const params = useParams();
   const blogs = useSelector((state) => state.cart.blogs)
    
      
      const individualBlog = blogs.find((ele) => ele.id === Number(params.blogId))

  return (
     <>
       <div className="blog-card" key={individualBlog.id}>
            <img src={individualBlog.image} alt={individualBlog.title} />
            <div className="blog-content">
              <h3>{individualBlog.title}</h3>
              <p className="blog-meta">
                {individualBlog.date} &nbsp; {individualBlog.comments}
              </p>
              <p className="blog-desc">{individualBlog.description}</p>
    
            </div>
          </div>
     </>
  )
}

export default SingleBlog