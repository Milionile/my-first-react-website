import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import GetInTouch from '@/pages/GetInTouch';
import HomePage from '@/pages/home';
import Blog from '@/pages/Blog';
import CyberSecurity from '@/pages/CyberSecurity';
import NetworkInfrastructure from '@/pages/NetworkInfrastructure';
import OurServices from '@/pages/OurServices';
import OurSolution from '@/pages/OurSolution';
import UnifiedCommunication from '@/pages/UnifiedCommunication';
import Surveillance from '@/pages/Surveillance';
import SSLD from '@/pages/SSLD';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
        <Route path="/NetworkInfrastructure" element={<NetworkInfrastructure/>}/>
        <Route path="/OurServices" element={<OurServices/>}/>
        <Route path="/OurSolution" element={<OurSolution/>}/>
        <Route path="/UnifiedCommunication" element={<UnifiedCommunication/>}/>
        <Route path="/Surveillance" element={<Surveillance/>}/>
        <Route path="/SSLD" element={<SSLD/>}/>
      </Routes>
    </div>
  );
}

export default App;
