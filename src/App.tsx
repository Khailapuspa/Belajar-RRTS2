import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kaos from './pages/Kaos';
import Kemeja from './pages/Kemeja';
import Celana from './pages/Celana';


function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/kaos" element={<Kaos />} />
      <Route path="/kemeja" element={<Kemeja />} />
      <Route path="/celana" element={<Celana />} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
