import './Home.css';

import About from './About';
import Header from './Header';
import Events from './Events';

const Home = ({ language, setLanguage }) => {
    return (
        <div className='home'>
            <Header language={language} setLanguage={setLanguage} />
            <About language={language} />
            <Events language={language} />
        </div>
    )
}

export default Home;
