import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(`
    <i class="fas fa-search wd-override-search-icon">
        </i>
        <input class="wd-override-search" type="text" placeholder="Search Twitter"/>
        <span class="fa-2x">
          <a href="#">
             <i class="fas fa-cog text-primary wd-override-gear">
             </i>
          </a>
        </span>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="../for-you.html">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../trending.html">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../news.html">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../sports.html">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../entertainment.html">
              <span class="d-none d-md-inline d-lg-inline">
                Entertainment
              </span>
            </a>
          </li>
        </ul>
        <div class="card border-0">
          <img class="img-fluid wd-spacex-override" src="../../images/spacex.jpg">
          <div class="card-img-overlay">
            <h2 class="text-white fw-bold wd-picture-caption">
              SpaceX's Starship
            </h2>
          </div>
        </div>
  `)
}

export default ExploreComponent;