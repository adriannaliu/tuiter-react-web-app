import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a className="list-group-item">
          <i className="bi bi-twitter fa-2x"/>
          <span class="d-none d-xxl-inline d-xl-inline">
            {' '} Tuiter
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
          <i className="bi bi-house-fill fa-2x"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Home
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <i className="bi bi-hash"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Explore
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <i className="bi bi-bell-fill"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Notifications
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <i className="bi bi-envelope-fill"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Messages
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <i className="bi bi-bookmark-fill"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Bookmarks
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <i className="bi bi-list-ul"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Lists
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-fill"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} Profile
          </span>
        </a>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <i className="bi bi-three-dots"/>
          <span className="d-none d-xxl-inline d-xl-inline">
            {' '} More
          </span>
        </a>
        <button className="btn btn-primary rounded-pill wd-tuit-btn">
          Tuit
        </button>
      </div>
  );
};
export default NavigationSidebar;