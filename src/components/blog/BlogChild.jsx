import React from 'react'
import { useNavigate } from 'react-router'

const BlogChild = ({blog}) => {
    const navigate = useNavigate()

      const handleOnReadMore = (id) => {
     navigate(`/readMoreAboutBlog/${id}`)
  }

  return (
 <>
   <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-meta">
                {blog.date} &nbsp; {blog.comments}
              </p>
              <p className="blog-desc">{blog.description}</p>
              <a onClick = {() => handleOnReadMore(blog.id)} href="#" className="read-more">
                READ MORE »
              </a>
            </div>
          </div>
 </>
  )
}

export default BlogChild