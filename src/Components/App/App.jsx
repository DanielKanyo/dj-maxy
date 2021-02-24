import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

export const App = () => {
    const [language, setLanguage] = useState('hun');

    return (
        <Router>
            <div>
                <Navigation language={language} />
                <div className='content' >
                    <Switch>
                        <Route exact path="/">
                            <Home language={language} setLanguage={setLanguage} />
                        </Route>
                        <Route path="/about">
                            about
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
