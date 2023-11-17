import Dashboard                   from './components/Dashboard';
import HomePage                    from './components/HomePage';
import Login                       from './components/Login';
import Register                    from './components/Register';
import Navbar                      from './components/Navbar';
import WithNav                     from './components/WithNav'; 
import WithoutNav                  from './components/WithoutNav';
<<<<<<< HEAD
import Dashboard                   from './components/Dashboard';
import History                     from './components/VolunteerHistory';
=======
import ManageShift                 from './components/ManageShift';
>>>>>>> 87907c5 (Add calendar page)
import React                       from 'react';

import { Route, 
         BrowserRouter as Router, 
         Routes}                   from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route element={<WithoutNav />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<WithNav />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Route>
=======
        <Route element={<WithoutNav />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manageShift" element={<ManageShift />} />
        </Route>        
>>>>>>> 87907c5 (Add calendar page)
      </Routes>
    </Router>
  );
}

export default App;