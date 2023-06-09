import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

class App extends React.Component {
    //state is an object
    state = {
        movies: [],
        searchQuery: ""
    }

    //fetch işlemlerini burda yapmak en dogrusu cunku bu lifecycle metodu ui componenetleri DOM da yerini aldıktan hemen sonra çalışmakta
    /*async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        const data = await response.json();
        this.setState({ movies: data })
    }*/

    //axios http istekleri yapmak icin kullanılan bir kütüphane
    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }
    //DELETE MOVIE
    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
    //     //state bos ise bu kalıp dogru
    //     /*  this.setState({
    //           movies:newMovieList
    //       })*/
    //     //updating
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }  

    //FETCH API
    /*deleteMovie = async (movie) => {
        //JS ifadesi oldugu için `` kullanılır
        const baseURL = `http://localhost:3002/movies/${movie.id}`; //silinecek film id si
        //default metod get dir.
        await fetch(baseURL,{method:"DELETE"});
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
        this.setState(state => ({
            movies: newMovieList
        }))
    }*/

    //DELETE MOVIE
    //Axios ile delete
    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
        this.setState(state => ({
            movies: newMovieList
        }))
    }
    //SEARCH MOVIE
    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }
    //ADD MOVIE
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie);
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
        this.getMovies();
    }
    //EDIT MOVIE
    editMovie = async (id, updatedMovie) => {
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
        this.getMovies();
        window.location.href = "http://localhost:3000/";
    }
    //RENDER
    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        })
        return (
            <Router>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={(
                                <React.Fragment>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <SearchBar searchMovieProp={this.searchMovie} />
                                        </div>
                                    </div>
                                    <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/add" element={<AddMovie onAddMovie={(movie) => { this.addMovie(movie); }} />} />
                        <Route path="/edit/:id" element={<EditMovie onEditMovie={(id, movie) => { this.editMovie(id, movie); }} />
                        } />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;