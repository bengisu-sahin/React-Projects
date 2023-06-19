import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string <= maxLength) return string;
        return `${string.substring(0, maxLength)}...`;
    }

    return (
        <div className="row">

            {props.movies.map((movie, i) => (
                <div className="col-lg-4" key={i}>
                    <div className="card mb-4 shadow -sm">
                        <img src={movie.imageURL} className="card-img-top" alt="sampleIMG" />
                        <div className="card-body">
                            <h5 className="cardTitle">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview, 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger " onClick={(event) => props.deleteMovieProp(movie)}>Delete</button>
                                <Link type="button"
                                    className="btn btn-md btn-outline-primary"
                                    to={`edit/${movie.id}`}
                                    >Edit</Link>

                                <h2><span className="badge bg-info text-dark">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default MovieList;