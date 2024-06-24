import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>View All Posts</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Title</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Author</h6>
                                        <p class="card-text">Content .... Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Title</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Author</h6>
                                        <p class="card-text">Content .... Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Title</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Author</h6>
                                        <p class="card-text">Content .... Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Title</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Author</h6>
                                        <p class="card-text">Content .... Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll