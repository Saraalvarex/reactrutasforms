import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
import FormSimple from './components/FormSimple';
import Collatz from './components/Collatz';
import TablaMultiplicar2 from './components/TablaMultiplicar2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home/>
    <Musica/>
    <Cine/>  */}
    {/* Elementos dinamicos
    <h1>Pág principal</h1>
      <Router/>
    <h2>Pie de pagina</h2> 
    <FormSimple/>
    <Collatz/>*/}
    <TablaMultiplicar2/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
