import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Link2 from './Link2';

export default function LinkRoute({match}) {

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/link2`} component={Link2}/>
      </Switch>

      <Link to={`${match.path}/link2`}>test-btn</Link>
    </div>
  )
}
