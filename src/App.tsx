import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import GetInTouch from '@/pages/GetInTouch';
import HomePage from '@/pages/home';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
