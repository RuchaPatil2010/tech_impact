import HomePage                    from './components/HomePage';
import React                       from 'react';
import { Route, 
         BrowserRouter as Router, 
         Routes}                   from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
