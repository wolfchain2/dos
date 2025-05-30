
import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '@/pages/HomePage'; // Updated path
import MarketP2PPage from './pages/MarketP2PPage';
import InvestorsPage from './pages/InvestorsPage';
import BorrowersPage from './pages/BorrowersPage';
import RegistrationPage from './pages/RegistrationPage';
import ChatbotFAB from './components/ChatbotFAB';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const validSections = ['/', '/home', '/marketp2p', '/inversionistas', '/prestamos', '/registro'];
    const currentPath = location.pathname === '/' ? '/home' : location.pathname;
    
    if (!validSections.includes(currentPath) && location.hash) {
        const hashSection = location.hash.substring(1);
        if (validSections.map(s => s.substring(1)).includes(hashSection)) {
            navigate(`/${hashSection}`, { replace: true });
        } else if (validSections.includes(hashSection)) {
             navigate(hashSection, { replace: true });
        }
         else {
            navigate('/home', { replace: true });
        }
    } else if (!validSections.includes(currentPath) && !location.hash) {
         navigate('/home', { replace: true });
    }

    window.scrollTo(0, 0);
  }, [location, navigate]);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/marketp2p" element={<MarketP2PPage />} />
          <Route path="/inversionistas" element={<InvestorsPage />} />
          <Route path="/prestamos" element={<BorrowersPage />} />
          <Route path="/registro" element={<RegistrationPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotFAB />
    </div>
  );
};

export default App;