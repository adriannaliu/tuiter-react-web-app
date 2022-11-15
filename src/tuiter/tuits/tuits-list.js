import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitsItem
  from "./tuits-item.js";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
    // eslint-disable-next-line
  }, []);
  return(
      <div>
        <ul className="list-group">
          {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
          }
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
  );
};
export default TuitsList;