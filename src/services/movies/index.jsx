import {API_URL, moviesEndpoint } from '../../consts';
import axios from 'axios';

export const getMovies = async () => {
    const response = await axios.get(`${API_URL}${moviesEndpoint}`);
    console.log(response);

}
