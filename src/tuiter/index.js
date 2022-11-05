import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList
  from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homeReducer from "./tuits/home/home-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {Route, Routes, useLocation} from "react-router";
import HomeComponent from "./tuits/home";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, home: homeReducer}});

function Tuiter() {
  // const location = useLocation();
  // console.log(location);

  return (
      <Provider store={store}>
        <Nav/>
        <div className="row mt-2">
          <NavigationSidebar active="explore"/>
          <Routes>
            <Route index path="/" element={<ExploreComponent/>} /*active="explore"*//>
            <Route path="/home" element={<HomeComponent/>}/>
            <Route path="/explore" element={<ExploreComponent/>} /*active="explore"*//>
          </Routes>
          <WhoToFollowList/>
        </div>
      </Provider>
  );
}

export default Tuiter