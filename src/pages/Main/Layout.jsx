import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from "../../pages/Main/Home"
import LifeService from "../../pages/Main/LifeService"
import Shop from "../../pages/Main/Shop"
import User from "../../pages/Main/User"

import BottomNav from '../../components/BottomNav';

function Layout (props) {
  // console.log(props.children, '1')
  return (
    <div>
      <BottomNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* exact 开启严格匹配 */}
        <Route path="/life" element={<LifeService />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>

    </div>
  )
}

export default Layout
