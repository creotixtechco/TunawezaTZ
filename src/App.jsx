import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Donate from './pages/Donate';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/impact" element={<Impact />} />
                        <Route path="/get-involved" element={<GetInvolved />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;