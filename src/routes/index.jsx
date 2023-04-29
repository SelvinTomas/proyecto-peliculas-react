import React from "react";
import { Route, Routes} from 'react-router-dom';
import Homepage from "../components/homepage";
const Rutas = () => (
    
    <Routes>
        <Route path="/"  Component={Homepage}></Route>
    </Routes>

    
)

export default Rutas;