import React from 'react'
import Navbar from './Navbar'

const AddPost = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <center>
            <h3>Add Post</h3>
          </center>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Content</label>
                <textarea name="" id="" className="form-control"></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                <button className="btn btn-info">Post</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost