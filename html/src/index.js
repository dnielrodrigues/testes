import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import './index.css'

// pages
const Home = lazy(() => import('./views/home.js'))
const Login = lazy(() => import('./views/login.js'))
const Admin = lazy(() => import('./views/admin.js'))
const About = lazy(() => import('./views/about.js'))
const Game = lazy(() => import('./views/game.js'))

// main
ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/about" component={About}/>
        <Route path="/game" component={Game}/>
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root')
)