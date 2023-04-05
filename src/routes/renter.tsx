import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'

import Signup from 'pages/renter/Signup'
import Home from 'pages/renter/Home'
import NotFound from 'pages/static-page/NotFound'
import SearchResult from 'pages/renter/City'
import RoomDetail from 'pages/renter/Detail'
import RentPopup from 'pages/renter/RentPopup'
import Account from 'pages/renter/Account'
import Bookmark from 'pages/renter/Bookmark'
import Login from '../pages/shared/Login';

export default function RenterRouter() {
  const router = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${router.path}/`} component={Home} />
      <Route exact path={`${router.path}/login`} component={Login} />
      <Route exact path={`${router.path}/rooms/:room_id`} component={RoomDetail} />
      <Route exact path={`${router.path}/search`} component={SearchResult} />
      <Route exact path={`${router.path}/signup`} component={Signup} />
      <Route exact path={`${router.path}/account`} component={Account} />
      <Route exact path={`${router.path}/bookmarks`} component={Bookmark} />
      <Route component={NotFound} />
    </Switch>
  )
}
