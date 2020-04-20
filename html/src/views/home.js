import React from 'react'
import {Link} from "react-router-dom"

export default function Home(props) {
  return (
    <header className="App-header">
      <p>Página Home</p>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/game">Game</Link></li>
      </ul>
    </header>
  )
}