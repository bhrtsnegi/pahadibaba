import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Homepage from './components/Homepage';
import Service from './components/Service';
import Pages from './components/Pages';
import Pricing from './components/Pricing';

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