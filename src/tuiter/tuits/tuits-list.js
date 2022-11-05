import React from "react";
import TuitsItem
  from "./tuits-item.js";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuits = useSelector(state => state.home)
  return(
      <ul className="list-group">
        {
          tuits.map(tuit =>
              <TuitsItem
                  key={tuit._id} tuit={tuit}/> )
        }
      </ul>
  );
};
export default TuitsList;