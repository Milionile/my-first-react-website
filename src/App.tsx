import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import GetInTouch from '@/pages/GetInTouch';
import HomePage from '@/pages/home';
import Blog from '@/pages/Blog';
import CyberSecurity from './pages/CyberSecurity';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
      </Routes>
    </div>
  );
}

export default App;
