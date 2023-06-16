import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
    //state is an object
    state = {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
            {
                "id": 3,
                "name": "Saw 3D",
                "rating": "7.5",
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg"
            }
        ]
    }

    deleteMovie=(movie)=>{
        const newMovieList=this.state.movies.filter(m=> m.id !== movie.id);
        this.setState({
            movies:newMovieList
        })
    }
    
    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-lg-12">

                        {/*                         <SearchBar /> */}

                    </div>

                </div>
                <MovieList movies={this.state.movies} deleteMovieProp={this.deleteMovie} />
            </div>


        )

    }


}

export default App;