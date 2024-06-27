import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

    const [data, setdata] = useState({
        "name": "",
        "dob": "",
        "gender": "",
        "email": "",
        "password": ""
    })

    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/signup",data).then(
            (response) => {
                if (response.data.status == "succes") {
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
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>Sign Up</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control" value={data.gender} onChange={inputHandler}>
                                    <option value="Select">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup