import React from "react";
const TuitsItem = (
    {
      tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "../../../public/image/spacex.jpg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="fw-bold">
              {tuit.userName}
              <span className="text-muted fw-normal">
                {' '} {tuit.handle} &middot; {' '} {tuit.time}
              </span>
            </div>
            <div className="fw-normal">
              {tuit.tuit}
            </div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt="logo"/>
          </div>
        </div>
      </li>
  );
};
export default TuitsItem;