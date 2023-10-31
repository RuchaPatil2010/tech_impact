import HomePage                    from './components/HomePage';
import Login                       from './components/Login';
import LoginT from './components/LoginTest';
import Register                    from './components/Register';
import React                       from 'react';
import { Route, 
         BrowserRouter as Router, 
         Routes}                   from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;