import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Header from '../Header/Header';
import Events from '../Events/Events';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Tech from '../Tech/Tech';
import Footer from '../Footer/Footer';

import './App.css';

const App = () => {
    const [language, setLanguage] = useState('hun');

    return (
        <div>
            <Navigation language={language} />

            <div className='app'>
                <Header language={language} setLanguage={setLanguage} />
                <About language={language} />
                <Events language={language} />
                <Gallery language={language} />
                <Tech language={language} />
                <Contact language={language} />
                <Footer language={language} />
            </div>
        </div>
    );
}

export default App;
