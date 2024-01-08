import React from "react";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_contact-info">
        <h3>Контакты</h3>
        <p>Телефон: 1111111111</p>
        <p>Email: maksimbelaev831@Email.com</p>
        <p>Адрес: ул. Якубосвкого, д 66</p>
      </div>
      <div className="footer_about-us">
        <h3>
          <a className="footer-a">«О нас»</a>
        </h3>
      </div>
      <div className="footer_social-links">
        <h3>Мы в социальных сетях</h3>
        <ul>
          <li>
            <a className="footer-a" href="https://www.facebook.com/example">
              Facebook
            </a>
          </li>
          <li>
            <a className="footer-a" href="https://www.twitter.com/example">
              Twitter
            </a>
          </li>
          <li>
            <a className="footer-a" href="https://www.instagram.com/example">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
