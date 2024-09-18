import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Homepage from './pages/Homepage';
import Service from './pages/Service';
import Pages from './pages/Pages';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;