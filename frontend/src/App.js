import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todos from './pages/Todos';
import Habits from './pages/Habits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/todos" replace />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/habits" element={<Habits />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;