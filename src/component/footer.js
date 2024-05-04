import React from 'react';
import logo from '../component/asset/image/logohidoc.png';

function Footer() {
  return (
    <div class="main-footer">
      <div class="top-footer">
        <div class="first">
          <div class="logo">
            <img class="logo" src={logo} style={{ width: '200px' }} />
          </div>
          <div class="content">Fastest Growing Platform for Doctors</div>
          <div class="social-media">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="second">
          <h2>Reach Us</h2>
          <p>Please contact the below details for any other information</p>

          <p>
            <h4>Email:</h4>info@hidoc.co
          </p>

          <p>
            <h4>Address:</h4>
            Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C,Wilmington, DE, 19808,
            United States.
          </p>
        </div>
        <div class="third">
          <h2>HIDOC DR. FEATURES</h2>
          <div class="features">
            <div class="features-one">
              <i class="fa-regular fa-folder"></i>
              <p>Drug Database</p>
            </div>
            <div class="features-two">
              <i class="fa-solid fa-video"></i>
              <p>Webinar</p>
            </div>
            <div class="features-three">
              <i class="fa-solid fa-file"></i>
              <p>Drug Interaction</p>
            </div>
            <div class="features-four">
              <i class="fa-solid fa-calculator"></i>
              <p>Medical Calculator</p>
            </div>
            <div class="features-five">
              <i class="fa-solid fa-newspaper"></i>
              <p>Articles</p>
            </div>
            <div class="features-six">
              <i class="fa-solid fa-trophy"></i>
              <p>Quizzes</p>
            </div>
            <div class="features-seven">
              <i class="fa-solid fa-database"></i>
              <p>Diseases Database</p>
            </div>
            <div class="features-eight">
              <i class="fa-solid fa-square-poll-vertical"></i>
              <p>Surveys</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <p>
          {' '}
          © copyright 2024 <b>Hidoc Dr. Inc.</b>
        </p>
        <p>
          <span>Terms & Conditions </span>
          <span> &nbsp;Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
