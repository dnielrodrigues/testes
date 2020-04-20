import React, { Suspense, lazy } from 'react'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from '../components/header.js'

// routes
const Login = lazy(() => import('../views/login.js'))
const About = lazy(() => import('../views/about.js'))
const Game = lazy(() => import('../views/game.js'))
const page404 = lazy(() => import('../views/404.js'))

export default function Admin(props) {
  return (
    <div>
      <Header></Header>
      <Container>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route path="/admin/login" component={Login}/>
            <Route path="/admin/about" component={About}/>
            <Route path="/admin/game" component={Game}/>
            <Route path="*" component={page404}/>
          </Switch>
        </Suspense>
      </Container>
    </div>
  )
}