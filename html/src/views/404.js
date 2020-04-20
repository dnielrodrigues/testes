import React from 'react'
import { Link } from '@material-ui/core'

export default function page404(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>404</h1>
        <p>Conteúdo não encontrado</p>
        <Link href="./">Início</Link>
      </header>
    </div>
  );
}
