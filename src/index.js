import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Admin from './pages/admin/Admin.jsx'
import Login from './pages/login/Login.jsx'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Admin}></Route>
            <Route path='/login' component={Login}></Route>
        </Switch>
    </BrowserRouter>,
    document.querySelector('#root')
)