import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Homepage from './pages/Homepage';
import Service from './pages/Service';
import Pages from './pages/Pages';
import Pricing from './pages/Pricing';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen'; // Assuming you have a signup screen

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {!isLoggedIn ? (
          <Routes>
            {/* Define a route for the login page */}
            <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupScreen />} />
            {/* Redirect any other paths to login */}
            <Route path="*" element={<LoginScreen onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} /> {/* Ensure homepage route exists */}
              <Route path="/service" element={<Service />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<Homepage />} /> {/* Fallback route */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
