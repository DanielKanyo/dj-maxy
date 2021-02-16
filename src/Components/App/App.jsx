import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

function App() {
    return (
        <Router>
            <div>
                <Navigation />

                <div className='content'>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
