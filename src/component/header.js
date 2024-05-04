import logo from '../component/asset/image/logohidoc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function header() {
  return (
    <>
      <header class="header">
        <nav class="menu">
          <img class="logo" src={logo} />
          <ul>
            <li>
              <a href="#">Drugs</a>
            </li>
            <li>
              <a href="#">Calculators</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Quizzes</a>
            </li>
            <li>
              <a href="#">Surveys</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
            <li>
              <a href="#">Guideliness</a>
            </li>
          </ul>
        </nav>
        <div class="info">
          <div class="toggle-menu" data-toggle-menu>
            Toggle menu
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
          </div>
          <div class="user-info">
            <i class="fa-solid fa-trophy trophy"></i>
            <p>275</p>
          </div>
          <div class="user">
            <span>A</span>
          </div>
        </div>
      </header>
      <div class="tagline">
        <p>
          Your one-stop solution for <span> MEDICAL LEARNING & UPDATES</span>
        </p>
      </div>
      <div class="search-section">
        <div>
          <p>
            Get knowledge of the <span> APPROVED DRUGS</span>
          </p>
        </div>
        <div class="container">
          <input
            type="text"
            id="box"
            placeholder="Enter Drug Type..."
            class="search__box"
          />
          <i class="fas fa-search search__icon" id="icon"></i>
        </div>
      </div>
    </>
  );
}

export default header;
