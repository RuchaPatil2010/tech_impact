import Dashboard                   from './components/Dashboard';
import HomePage                    from './components/HomePage';
import Login                       from './components/Login';
import Register                    from './components/Register';
import Navbar                      from './components/Navbar';
import WithNav                     from './components/WithNav'; 
import WithoutNav                  from './components/WithoutNav';
import ManageShift                 from './components/ManageShift';
import React                       from 'react';

import { Route, 
         BrowserRouter as Router, 
         Routes}                   from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manageShift" element={<ManageShift />} />
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;