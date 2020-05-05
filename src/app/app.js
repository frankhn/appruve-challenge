import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Plans from './containers/plans/plans'
import './app.css'

class App extends Component {
    render() {
       return (
         <Layout>
             <Switch >
        <Route path="/" exact component={Plans}/>
      </Switch>
         </Layout>
       )
    }
}

export default App