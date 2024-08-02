// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Navigate, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Builder from './components/Builder';
import TemplateSelectionPage from './components/TemplateSelectionPage';

function App() {
  return (
    <Provider store={store}>
      <div className="mx-4 mb-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/dashboard/builder" element={<Builder />} />
          <Route path="/templates" element={<TemplateSelectionPage />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
