import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="item1">
          
          </div>

          <div className="item2">
            <span style={{ paddingRight: 5 }}>Copyright </span>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <span style={{ paddingLeft: 5 }}>
              {new Date().getFullYear()} <a href={'https://webdevelopersteam.info/ashokkumar'} rel="" >Ashok Kumar</a>. All Rights Reserved.
            </span>
          </div>
          <a href="a"
            target="_blank"
            className="item3" rel={'noreferrer'}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://webdevelopersteam.info/ashokkumar" target="_blank" className="item4" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=7386473502" target="_blank" className="item5" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

       
        </div>
      </footer>
  );
};

export default Footer;
