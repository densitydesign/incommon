import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import TempiELuoghi from './pages/TempiELuoghi'
import DettaglioDocumento from './pages/DettaglioDocumento'
import DettaglioSpettacolo from './pages/DettaglioSpettacolo'
import Forma from './pages/Forma'
import Spettacolo from './pages/Spettacolo'
import Archivio from './pages/Archivio'
import Slideshow from './pages/Slideshow'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/catalogo-dei-documenti" exact>
          <Catalogo />
        </Route>
        <Route path="/tempi-e-luoghi" exact>
          <TempiELuoghi />
        </Route>
        <Route path="/catalogo-dei-documenti/:id" exact>
          <DettaglioDocumento />
        </Route>
        <Route path="/la-forma-della-comunita" exact>
          <Forma />
        </Route>
        <Route path="/ricomporre-uno-spettacolo" exact>
          <Spettacolo />
        </Route>
        <Route path="/ricomporre-uno-spettacolo/:id" exact>
          <DettaglioSpettacolo />
        </Route>
        <Route path="/sparagmos-archivio" exact>
          <Archivio />
        </Route>
        <Route path="/slideshow" exact>
          <Slideshow />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
