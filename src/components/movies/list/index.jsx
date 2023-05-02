import React, { Component } from "react";
import {getMovies} from '../../../services';

export default class MovieList extends Component {
    constructor(){
        super();
        this.state = {

        };
    };

    componentDidMount = async () =>{
        console.log(await getMovies());
    }

    render(){
        return(
            <h1>
                La lista de peliculas
            </h1>
        )
    }
}
