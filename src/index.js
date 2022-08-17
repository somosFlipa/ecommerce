import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from "./UtilidadesJs/cardContext/cardContext";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB4q37vKFeRrX7yBrEsFJ72adgGNIljL4E",
  authDomain: "ventaderemeras-9f8e4.firebaseapp.com",
  projectId: "ventaderemeras-9f8e4",
  storageBucket: "ventaderemeras-9f8e4.appspot.com",
  messagingSenderId: "824094292024",
  appId: "1:824094292024:web:310ad5dd682a145c120ecd"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
