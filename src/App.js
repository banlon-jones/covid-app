import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StatsPage from './pages/StatPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats/:region" element={<StatsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
