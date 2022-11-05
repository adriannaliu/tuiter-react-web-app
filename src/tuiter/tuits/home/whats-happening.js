import {createTuit} from "./home-reducer";
import {useDispatch} from "react-redux";
import React, {useState} from "react";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuit(newTuit));
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src="/images/nasa.png" width={60} alt="logo"/>
        </div>
        <div className="col-10">
          <textarea value={whatsHappening} placeholder="What's happening?"
                   className="form-control border-0"
                   onChange={(event) => setWhatsHappening(event.target.value)}>
          </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <i className="bi bi-card-image me-3"/>
              <i className="bi bi-filetype-gif me-3"/>
              <i className="bi bi-bar-chart me-3"/>
              <i className="bi bi-emoji-smile me-3"/>
              <i className="bi bi-geo-alt"/>
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
  );
}
export default WhatsHappening;