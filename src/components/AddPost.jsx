import axios from 'axios'
import React, { useState } from 'react'

const AddPost = () => {

  const [data, setdata] = useState({
    "title": "",
    "content": ""
  })

  const inputHandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    axios.post("http://localhost:8080/addpost").then(
      (response) => {
        if (response.data.status=="success") {
          alert("Success")
        } else {
          alert("Failed")
        }
      }
    ).catch(
      (error) => {
        alert(error.message)
        }
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <center>
            <h3>Add Post</h3>
          </center>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Content</label>
                <textarea name="content" id="" className="form-control" value={data.content} onChange={inputHandler}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                  <button className="btn btn-info" onClick={readValue}>Post</button>
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