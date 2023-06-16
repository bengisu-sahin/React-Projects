import React from "react";

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow -sm">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg" className="card-img-top" alt="sampleIMG" />
                        <div className="card-body">
                            <h5>Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger ">Delete</button>
                                <h2><span className="badge bg-info text-dark">9.0</span></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieList;