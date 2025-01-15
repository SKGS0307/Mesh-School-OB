import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Program from './pages/Program';
import Admissions from './pages/Admission';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
// import Protectedroute from './pages/Protectedroute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {/* Keeps authentication state updated */}
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Header/>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/learning' element={<Learning/>} />
        <Route path='/program' element={<Program/>} />
        <Route path='/admissions' element={<Admissions/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

{/* <Route element={<Protectedroute />}>
          <Route path="/payment" element={<Payment />} />
        </Route> */}
