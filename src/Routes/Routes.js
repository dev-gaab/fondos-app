import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import ListFondos from '../Components/Fondos/ListFondos'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/fondos" component={ ListFondos }/>
      </Switch>
    )
  }
}
