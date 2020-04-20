import React from 'react'
import {
  Button,
  Container
} from '@material-ui/core'

export default function Home(props) {
  return (
    <Container>
      <h1>Login</h1>
      <Button href="./admin" variant="contained" color="primary">Admin</Button>
    </Container>
  )
}