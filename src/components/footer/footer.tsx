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
          <div className="h4 mtb-1">Nos coordonnées</div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="mailto:contact@image-in.net">contact@image-in.net</a>
            </li>
            <li className="footer__list-item">
              <a href="tel:+336 52 52 52 52">06 50 71 07 19</a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <div className="h4 mtb-1">Nos liens utiles</div>
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
          <div className="h4 mtb-1">Nos réseaux sociaux</div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://www.facebook.com/Imagein.net">Facebook</a>
            </li>
            <li className="footer__list-item">
              <a href="https://www.instagram.com/imagein.pro/">Instagram</a>
            </li>
            <li className="footer__list-item">
              <a href="https://www.linkedin.com/company/image-in-douai">
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
