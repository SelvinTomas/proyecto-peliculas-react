import React from "react";
import { Route, Routes} from 'react-router-dom';
import Homepage from "../components/homepage";
import { MovieList } from "../components/movies";
const Rutas = () => (
    
    <Routes>
        <Route path="/"  Component={Homepage}></Route>
        <Route path="/peliculas"  Component={MovieList}></Route>
    </Routes>

    
)

export default Rutas;