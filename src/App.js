import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import TempiELuoghi from './pages/TempiELuoghi'
import DettaglioDocumento from './pages/DettaglioDocumento'
import Forma from './pages/Forma'
import CaseStudies from './pages/CaseStudies'
import Archivio from './pages/Archivio'
import About from './pages/About'
import MobileScreen from './components/MobileScreen'

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  if(isMobile){
    return (
      <MobileScreen />
    )
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/catalogue" exact>
          <Catalogo />
        </Route>
        <Route path="/times-and-places" exact>
          <TempiELuoghi />
        </Route>
        <Route path="/catalogue/:id" exact>
          <DettaglioDocumento />
        </Route>
        <Route path="/the-shape-of-community" exact>
          <Forma />
        </Route>
        <Route path="/recomposition">
          <CaseStudies />
        </Route>
        <Route path="/performance-remains" exact>
          <Archivio />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
