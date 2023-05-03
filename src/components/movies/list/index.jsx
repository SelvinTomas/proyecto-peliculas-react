import React, { Component } from "react";
import {getMovies} from '../../../services';
import moment from "moment";
import "./index.scss"

export default class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            isReady: false,
            hasError: false,
            error: null
        };
    };

    componentDidMount = async () =>{
        const movies = await getMovies();
        if (!movies.hasError){
            this.setState({
                movies,
                isReady: true
            })
        } else {
            this.setState({
                hasError: true,
                error: movies.error
            })

        }
    }

    render(){
        const{
             movies,
             isReady,
             hasError,
             error
         } = this.state;
         return(
             <>
                 {
                     isReady ?
                         <ListComponent 
                             movies={movies}
                         />
                         : 
                         hasError ?
                         <ErrorComponent
                             error={error}
                         /> 
                         : <LoadingComponent />
                 }
             </>
        )

    }
};

const ListComponent = (props) => (
    <>
        {
            props.movies.length > 0 ?
                props.movies.map((movie) => (
                    <MovieCard 
                        movie={movie}
                    />
                ))
            : <p>No hay ninguna pelicula registrada</p>
        }
    </>
);

const MovieCard = ({movie}) => (
    <>
        <div className="movie-card-container">
            <div className="movie-card-info">
                <div className="movie-card-basic-info">
                    <p className="movie-card-title"> {movie.title}</p>
                    <p className="movie-card-desc"> {movie.description}</p>
                </div>
                <div className="movie-card-details">
                    <p>
                        Costo de la entrada: <span>
                            {movie.ticketPrice}
                        </span>
                    </p>
                    <p>
                        Duración: <span>
                            {movie.duration} (min.)
                        </span>
                    </p>
                    <p>
                        Disponible en cines: <span>
                            {movie.isOnCinema ? 'SI' : 'NO'}
                        </span>
                    </p>
                </div>

            </div>
            <div className="movie-card-schedules-container">
                <p>Horarios disponibles</p>
                <div className="movie-card-schedules">
                    {
                        movie.schedules.length > 0 ?
                        movie.schedules.map(schedule => (
                            <p>{moment(schedule.time).format('HH:mm')}</p>
                        ))
                    : <p>No hay horarios disponibles</p>
                    } 
                </div>
            </div>
        </div>
    </>
);
const ErrorComponent = ({error}) =>(
    <>
        <p>Ups! Algo salió mal al listar las peliculas</p>
        <p>{error}</p>
    </>
);

const LoadingComponent = () => (
    <>
    <p>Cargando... </p>
    <img src="https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="" />
    </>
);