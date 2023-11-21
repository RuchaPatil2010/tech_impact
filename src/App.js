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
<<<<<<< HEAD
>>>>>>> 87907c5 (Add calendar page)
=======
import ApproveUsers                from './components/ApproveUsers';
import StaffList                   from './components/StaffList';
>>>>>>> 7a45752 (Make modifications in Calendar)
import React                       from 'react';

import { Route, 
         BrowserRouter as Router, 
         Routes}                   from 'react-router-dom';
import ApproveShifts from './components/ApproveShifts';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';

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
          <Route path="/approveUsers" element={<ApproveUsers />} />
          <Route path="/staffList" element={<StaffList />} />
          <Route path="/approveShifts" element={<ApproveShifts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Route>        
>>>>>>> 87907c5 (Add calendar page)
      </Routes>
    </Router>
  );
}

export default App;