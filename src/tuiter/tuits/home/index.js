import Nav from "../../../nav";
import NavigationSidebar from "../../navigation-sidebar";
import WhoToFollowList
  from "../../who-to-follow-list/index.js";
import whoReducer
  from "../../reducers/who-reducer";
import tuitsReducer from "../tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import React from "react";
import TuitsList from "../tuits-list";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ExploreComponent from "../../explore";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function HomeComponent() {
  return (
      <Provider store={store}>
        <Nav/>
        <div className="row mt-2">
          <NavigationSidebar active="home"/>
          <TuitsList/>
          {/*<Routes>*/}
          {/*  <Route index path="/" element={<ExploreComponent/>} /*active="explore"*//>*/}
          {/*  <Route path="/home" element={<HomeComponent/>}/>*/}
          {/*  <Route path="/explore" element={<ExploreComponent/>} /*active="explore"*//>*/}
          {/*</Routes>*/}
          <WhoToFollowList/>
        </div>
      </Provider>
  );
  // return (
  //     // <BrowserRouter>
  //       <Provider store={store}>
  //         <Nav/>
  //         <div className="row mt-2">
  //           <div className="col-2 col-md-2 col-lg-1 col-xl-2">
  //             <NavigationSidebar active="explore"/>
  //           </div>
  //           <div className="col-10 col-md-10 col-lg-7 col-xl-6"
  //                style={{"position": "relative"}}>
  //             <h3>Home</h3>
  //             <TuitsList active="home"/>
  //           </div>
  //           <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
  //             <WhoToFollowList/>
  //           </div>
  //         </div>
  //       </Provider>
  //     // </BrowserRouter>
  // );
}

export default HomeComponent;