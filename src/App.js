import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
    <Navbar />
    <div className="main-body">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
