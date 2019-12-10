import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import welcome from '../page/welcome'
import profiles from '../page/profiles'
function RouterList (props) {
    let {
        store
    } = props
    return (
        <div className='content'>
            <div className='book-body'>
                <Provider store={store}>
                    <Switch>
                        <Redirect path='/' exact to='/index' />
                        <Route path='/index' component={welcome} />
                        <Route path='/profiles' component={profiles} />
                    </Switch>
                </Provider>
            </div>
        </div>
    )
}


export default RouterList


