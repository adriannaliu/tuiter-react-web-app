import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <div>
          <div className="list-group wd-nav-sidebar">
            <a className="list-group-item" href="#top">
              <i className="bi bi-twitter fa-2x"/>
            </a>
            <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} href="#top">
              <i className="bi bi-house-fill fa-2x"/>
              <span className="d-none d-xxl-inline d-xl-inline">
                <Link to="/tuiter/home" className="wd-home-link">{' '} Home</Link>
              </span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`} href="#top">
              <i className="bi bi-hash"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              <Link to="/tuiter/" className="wd-explore-link">{' '} Explore</Link>
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`} href="#top">
              <i className="bi bi-bell-fill"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} Notifications
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} href="#top">
              <i className="bi bi-envelope-fill"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} Messages
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} href="#top">
              <i className="bi bi-bookmark-fill"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} Bookmarks
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} href="#top">
              <i className="bi bi-list-ul"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} Lists
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} href="#top">
              <i className="bi bi-person-fill"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} Profile
            </span>
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} href="#top">
              <i className="bi bi-three-dots"/>
              <span className="d-none d-xxl-inline d-xl-inline">
              {' '} More
            </span>
            </a>
          </div>
          <button className="btn btn-primary rounded-pill wd-tuit-button">
            Tuit
          </button>
        </div>
      </div>
  );
};
export default NavigationSidebar;