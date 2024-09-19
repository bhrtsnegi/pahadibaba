import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Homepage from './pages/Homepage';
import Service from './pages/Service';
import Pages from './pages/Pages';
import Pricing from './pages/Pricing';
import LoginScreen from './pages/LoginScreen';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {/* Show LoginScreen if not logged in, otherwise show Navbar and other routes */}
        {!isLoggedIn ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/service" element={<Service />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
