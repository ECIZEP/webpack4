import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import UserContext from './common/context/user';
import './index.less';

import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
const PageA = Loadable({
    loader: () => import(
        /* webpackChunkName: "pageA" */
        './routes/pageA/index.jsx'
    ),
    loading: () => null
})
const PageB = Loadable({
    loader: () => import(
        /* webpackChunkName: "pageB" */
        './routes/pageB/index.jsx'
    ),
    loading: () => null
})
import logo from '../public/images/react-logo.png'

  
class App extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <UserContext.Provider value={{
                    userInfo: {
                        userId: '234532'
                    }
                }}>
                    <div className="container">
                        <h1>hello react</h1>
                        <img src={logo} />
                        <Link to="/pageA"><button>pageA</button></Link>
                        <Link to="/pageB"><button>PageB</button></Link>
                        <Switch>
                            <Route path="/pageA" component={PageA} ></Route>
                            <Route path="/pageB" component={PageB} ></Route>
                        </Switch>
                    </div>
                </UserContext.Provider>
            </BrowserRouter>
        )
    }
}

export default hot(module)(App)