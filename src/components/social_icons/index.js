import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faSkype, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          
          <a href="https://github.com/foreverglorydev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://join.skype.com/invite/IgT7ycpPU4Pu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faSkype} />
          </a>
          <a href="https://www.linkedin.com/in/xiran-l-997887217" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
          <a href="https://t.me/Foreverglorydev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faTelegramPlane} />
          </a>
         </Col>
  );
}

export default SocialIcons;
