import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/catalogo" exact>
          <Catalogo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
