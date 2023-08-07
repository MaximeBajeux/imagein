import React from "react";
import "./footer.scss";
import { Link } from "gatsby";
import Col from "../col/col";
import Row from "../row/row";

const Footer = () => {
  return (
    <footer className="footer banner dark shadow mt-2">
      <Row>
        <Col xs={12} md={4}>
          <h4>Nos coordonnées</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="mailto:contact@image-in.net">
                <i className="fas fa-envelope"></i>
                contact@image-in.net
              </a>
            </li>
            <li className="footer__list-item">
              <a href="tel:+336 52 52 52 52">
                <i className="fas fa-phone"></i>
                06 50 71 07 19
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h4>Nos liens utiles</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
            <li className="footer__list-item">
              <Link to="/politique-de-cookies">Politique de cookies</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h4>Nos réseaux sociaux</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://www.facebook.com/Imagein.net">
                <i className="fab fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://www.instagram.com/imagein.pro/">
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://www.linkedin.com/company/image-in-douai">
                <i className="fab fa-linkedin"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
