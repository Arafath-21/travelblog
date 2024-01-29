import React from 'react'
import './_features.scss'
import ListingPost from './ListingPost'

const Features = () => {

  return <>
    <div className="container">
      <div className="row features">
        <div className="col-lg-6 col-md-6 col-sm-6 features__post h1">Featured Post
          <div className='featured' style={{paddingTop:'32px'}}><img src="https://source.unsplash.com/450x300/?maldives" alt="" className="features--img" /></div>
          <div className="author" style={{color:'black'}}>By <span className="author--name">James West</span>  |  May 23, 2022 </div>
          <div className="h3 features--content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          <div className="features--subcontent">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
          <div className="btn btn-primary" style={{padding:'16px 48px'}}>Read More</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="wrapper d-flex justify-content-between align-items-center">
            <div className="h1">All Posts</div>
            <div className="view-all">view-all</div>
          </div>
           <ListingPost />
        </div>
      </div>
    </div>
  </>
}

export default Features
// https://source.unsplash.com/450x300/?${product.img}