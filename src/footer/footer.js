import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={require("../images/Group.png")} alt="logo"/>
                </div>
                <div className="footer__social">
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="footer__icon"/>
                    <FontAwesomeIcon icon={faYoutube} size="lg" className="footer__icon"/>
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="footer__icon"/>
                    <FontAwesomeIcon icon={faPinterest} size="lg" className="footer__icon"/>
                    <FontAwesomeIcon icon={faInstagram}size="lg" className="footer__icon"/>
                </div>
                <div className="footer__links col1">
                    <span>About us</span>
                    <span>Contact</span>
                    <span>Blog</span>
                </div>
                <div className="footer__links col2">
                    <span>Careers</span>
                    <span>Support</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="button footer__cta">Request invite</div>
                <div className="footer__copyright">&copy; EasyBank. All Rights Reserved.</div>
            </div>
        </footer>
    )
}