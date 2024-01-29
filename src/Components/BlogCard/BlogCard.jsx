import React from 'react'

function BlogCard({title,image,description}) {
  return <>
    <div class="card m-auto" style={{"width": "18rem"}}>
    <img src={image?image:"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{title?title:"Card Title"}</h5>
        <p class="card-text">{
            description?description:"Some quick example text to build on the card title and make up the bulk of the card's content."
                             }
        </p>
    </div>
    </div>    
  </>
}

export default BlogCard