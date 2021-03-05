import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import useCaseStudies from '../../hooks/caseStudies'
import Slideshow from '../Slideshow/Slideshow'
import CaseStudiesList from './CaseStudiesList'
import CaseStudyDetail from './CaseStudyDetail'

export default function CaseStudies() {
  const match = useRouteMatch()
  const [{ caseStudies }] = useCaseStudies()

  return (
    <Switch>
      <Route path={match.path} exact>
        <CaseStudiesList caseStudies={caseStudies} />
      </Route>
      <Route path={`${match.path}/:slug`} exact>
        <CaseStudyDetail caseStudies={caseStudies} />
      </Route>
      <Route path={`${match.path}/:slug/slideshow`} exact>
        <Slideshow />
      </Route>
    </Switch>
  )
}
