import React, {Component} from 'react';
import MovieService from "../../services/movie.service";

class Movie extends Component {

    state = {
        movies: [

        ],
        selectedMovieId : 0
    }

    componentDidMount() {
        MovieService.getMovies().then(
            response => {
                this.setState({
                    movies: response.data
                });
            },
            error => {
                console.log(error)
            }
        );
    }

    handleMouseOver = (movie) => {
     /* const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movie.selected = true
      movies[index] = movie*/
      this.setState({selectedMovieId: movie.id});
    }

    handleMouseLeave = () => {
        this.setState({selectedMovieId: 0});
    }

    deleteMovie = (movie) => {
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies.splice(index, 1)
        this.setState({movies: movies});
    }

    render() {
        return (
            <div className="container">
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Trailer</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody onMouseLeave={this.handleMouseLeave}>
                    {this.state.movies.map((movie) => (
                        <tr key={movie.id} onMouseOver={() => this.handleMouseOver(movie)}>
                            <td><input name="title" value={movie.title}/></td>
                            <td><input name="description" value={movie.description}/></td>
                            <td><input name="trailer" value={movie.trailer}/></td>
                            <td>
                                <a>
                                    <span className={ "glyphicon glyphicon-remove " + (this.state.selectedMovieId === movie.id ? "red" : "grey")}
                                        onClick={() => this.deleteMovie(movie)}>
                                    </span>
                                </a>
                            </td>
                        </tr>
                    ))}
                        <tr>
                            <td><input/></td>
                            <td className="newmovie"><input/></td>
                            <td className="newmovie"><input/></td>
                            <td>
                                <a>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Movie;
