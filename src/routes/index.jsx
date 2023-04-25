import React from "react";
import {BrowserRouter as Routes, Route} from 'react-router-dom';
const Rutas = () => (
    <Routes>
        <Route path="/" element={()=><p>Hola</p>}></Route>

    </Routes>
)

export default Rutas;