import React, { Component } from 'react'
import './App.css'

// components
import Header from "./Header"
import Welcome from "./Welcome"
import UploadComment from "./UploadComment"
import Home from "./pages/Home"
import Footer from "./Footer"

// router
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/add-feedback' component={UploadComment} />
              <Route exact path='/feedback' component={UploadComment} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
