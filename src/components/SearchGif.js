import React from 'react'

export const SearchGif = () => {
    return (
        <div className="col-md-9 mt-3 mt-md-0 px-0 px-md-3">
            <form className="d-flex">
                <input type="text" className="form-control"/>
                <button className="btn btn-dark ms-3">Search</button>
            </form>
            <div className="container">
                <div className="row mt-3 gap-4">
                    <div class="card col-md-3 px-0">
                        <img src="https://via.placeholder.com/250x180" class="card-img-top" alt="" />
                        <div class="card-body">
                            <a role="button" className="btn btn-outline-dark w-100">View More</a>
                        </div>
                    </div>
                    <div class="card col-md-4 px-0">
                        <img src="https://via.placeholder.com/250x180" class="card-img-top" alt="" />
                        <div class="card-body">
                            <a role="button" className="btn btn-outline-dark w-100">View More</a>
                        </div>
                    </div>
                    <div class="card col-md-4 px-0">
                        <img src="https://via.placeholder.com/250x180" class="card-img-top" alt="" />
                        <div class="card-body">
                            <a role="button" className="btn btn-outline-dark w-100">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
