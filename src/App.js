import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './routes';
import {Header, Footer} from './components/common'
import './App.scss';



const App = () =>{
  return(
    <BrowserRouter>
    <Header />
    <div className='main-container'>    <Rutas /></div>

    <Footer />
    </BrowserRouter>
  )
}
export default App;