import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cine from './Cine';
import Home from './Home';
import Musica from './Musica';

export default class Router extends Component {
    render() {
        return (
		<BrowserRouter>
            <Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Musica" element={<Musica/>}/>
                <Route path="/Cine" element={<Cine/>}/>
            </Routes>
		</BrowserRouter>
        )
	}
}
