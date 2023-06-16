import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
    //state is an object
    state = {
        movies: [],

        searchQuery: ""
    }

    //fetch işlemlerini burda yapmak en dogrusu cunku bu lifecycle metodu ui componenetleri DOM da yerini aldıktan hemen sonra çalışmakta
    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        const data = await response.json();
        this.setState({ movies: data })
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);

        //state bos ise bu kalıp dogru
        /*  this.setState({
              movies:newMovieList
          })*/

        //updating
        this.setState(state => ({
            movies: newMovieList
        }))

    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (

            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>

                </div>
                <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
            </div>


        )

    }


}

export default App;