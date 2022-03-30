import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Trang chủ</Link>
            <Link to="/">Liên hệ</Link>
            <Link to="/">Dịch vụ</Link>
            <Link to="/">Thông tin</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Phần thưởng</Link>
            <Link to="/">Chính sách bảo mật</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Bạn nên xem</Link>
            <Link to="/">Phát hành gần đây</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
