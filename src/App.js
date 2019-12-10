import React from 'react';
import { createStore } from 'redux'
import RouterList from './router/RouterList';
import todoApp from './reducers'
import './app.less'
import Nav from './router/Nav';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
const store = createStore(todoApp)
class App extends React.Component {
    render () {
        return <div className="lite">

            <div className="hello">react 超高性能网站进阶修炼</div>
            <div className='app'>
                <Router>
                    <Nav/>
                    <RouterList store={store}/>
                </Router>
            </div>
        </div>

    }
}

export default App;
