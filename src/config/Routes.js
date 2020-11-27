import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Favorites from '../pages/Favorites'
<<<<<<< HEAD
import WatchingList from '../pages/WatchingList'
import Trending from '../pages/Trending'
=======
import WatchList from '../pages/WatchList'
>>>>>>> submain

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/favorites' component={ Favorites } />
<<<<<<< HEAD
    <Route path='/trending' component={ Trending } />
    <Route path='/watching-list' component={ WatchingList } />
=======
    <Route path='/watch-list' component={ WatchList } />
>>>>>>> submain
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                // more props to come here
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
  </Switch>
)

export default Routes;