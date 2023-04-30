import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'

const index = () => {
  return (
    <div>
        <Route exact path="/">
            <Home /> 
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
    </div>
  )
}

export default index