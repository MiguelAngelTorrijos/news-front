import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/News';
import NewsDetailsPage from './pages/NewsDetails';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<NewsPage />} path="/" />
          <Route element={<NewsDetailsPage />} path="/news" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
