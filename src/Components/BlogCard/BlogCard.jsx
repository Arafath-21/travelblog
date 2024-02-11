import React from 'react'

function BlogCard({title,image,description,selectedOption}) {
  return <>
    <div className="card m-auto" style={{"width": "18rem"}}>
    <img src={image?image:"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} className="card-img-top" alt="..."/>
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <h5 className="card-title">{title?title:"Card Title"}</h5>
        <h5>{selectedOption?selectedOption:"Trip Mode"}</h5>
      </div>
        <p className="card-text">{
            description?description:"Some quick example text to build on the card title and make up the bulk of the card's content."
                             }
        </p>
    </div>
    </div>    
  </>
}

export default BlogCard