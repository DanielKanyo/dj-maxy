import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Header from '../Header/Header';
import Events from '../Events/Events';
import Gallery from '../Gallery/Gallery';

import './App.css';

export const App = () => {
    const [language, setLanguage] = useState('hun');

    return (
        <div>
            <Navigation language={language} />

            <div className='content' >
                <Header language={language} setLanguage={setLanguage} />
                <About language={language} />
                <Events language={language} />
                <Gallery language={language} />
            </div>
        </div>
    );
}

export default App;
