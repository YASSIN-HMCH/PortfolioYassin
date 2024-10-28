import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio';
import Skills from './Skills'; // Import your Skills component
import Projects from './Projects';
import Certifies from './Certifies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Certifies" element={<Certifies />} />

            </Routes>
        </Router>
    );
};

export default App;