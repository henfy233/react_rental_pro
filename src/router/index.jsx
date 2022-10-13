import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../pages/Main/Layout';
import City from '../pages/City';
import Search from '../pages/Search';

const AppRouter = () => {
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path='/city' element={<City />}></Route>

    //     <Route path="/" element={<Home />}>
    //       <BottomNav />
    //       <Route path="/life" element={<LifeService />}></Route>
    //       <Route path="/shop" element={<Shop />}></Route>
    //       <Route path="/mine" element={<User />}></Route>
    //     </Route>
    //   </Routes>
    // </HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/city" element={<City />}></Route>
        {/* <Route path="/details/:id" component={Details}></Route> */}
        {/* <Route path="/login" component={Login}></Route> */}
        <Route path="/search/:keywords" element={<Search />}></Route>
        {/* <Route path="/zhengzu" component={ZhengZuFind}></Route> */}
        {/* <Route path="/graphfind" component={GraphFind}></Route> */}
        {/* <Route path="/order" component={Order}></Route> */}
        <Route path='/*' element={<Layout />}></Route>
      </Routes>

    </BrowserRouter>
  )
}
export default AppRouter
