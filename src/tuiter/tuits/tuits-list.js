import React from "react";
import TuitsItem
  from "./tuits-item.js";
import TuitStatsItem from "./home/tuit-stats-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuits = useSelector(state => state.home)
  return(
      // <div className="col-10 col-md-10 col-lg-7 col-xl-6"
      //      style={{"position": "relative"}}>
      <div>
        <h3>Home</h3>
        <ul className="list-group">
          {
            tuits.map(tuit =>
                <div>
                  <TuitsItem
                      key={tuit._id} tuit={tuit}/>
                </div>
            )
          }
        </ul>
      </div>
      // </div>
  );
};
export default TuitsList;