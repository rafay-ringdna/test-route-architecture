import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Link1 from './Link1';

export default function LinkRoute() {

  return (
    <div>
      <Switch>
        <Route path="/link1" component={Link1}/>
      </Switch>

      <Link to="/link2">test-btn</Link>
    </div>
  )
}
