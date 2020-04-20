import React from 'react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  Menu as IconMenu
} from '@material-ui/icons'
// import Box from '@material-ui/core/Box'
// import Link from '@material-ui/core/Link'

export default function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <IconMenu />
          </IconButton>
          <Box flexGrow={1}>
            <Typography variant="h6">
              App Name
            </Typography>
          </Box>
          <Button href="./login" color="inherit">Login</Button>
          <Button href="./" color="inherit">Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}