import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from 'App';
import { TransactionProvider } from "context/TransactionContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swap from "pages/Swap";

ReactDOM.render (
  <TransactionProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  </TransactionProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
