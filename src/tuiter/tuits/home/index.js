import whoReducer
  from "../../reducers/who-reducer";
import tuitsReducer from "../tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import React from "react";
import TuitsList from "../tuits-list";
import WhatsHappening from "./whats-happening";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

const HomeComponent = () => {
  return(
      <>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6"
               style={{"position": "relative"}}>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
          </div>
      </>
  );
}

export default HomeComponent;