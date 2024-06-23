import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>Login</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="" id="" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success">Login</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login