import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kaos from './pages/Kaos';
import Kemeja from './pages/Kemeja';
import Celana from './pages/Celana';
import DataPenjualan from './pages/DataPenjualan';
import Provider from 'react-redux/es/components/Provider';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kaos" element={<Kaos />} />
          <Route path="/kemeja" element={<Kemeja />} />
          <Route path="/celana" element={<Celana />} />
          <Route path="/data" element={<DataPenjualan />} />
        </Routes>
	</BrowserRouter>  
    </Provider>
    
  );
}

export default App;
