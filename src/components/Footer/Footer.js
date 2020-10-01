import React from 'react';
import './Footer.scss';

const Footer = ({partners, links}) => {
    const partnersLogos = partners.map((logo,i) => <img key={i} src={logo}  alt={'partner logo'} className="footer-partners-item"/>);

const navlinks = links.map((link, i) => <a href={link.href} key={i} className={'footer-nav-link'}>{link.title}</a>)
    
    return (
        < footer className="footer">
            <div className="container">
               <div className="footer-partners">
                  {partnersLogos}
               </div>

               <div className="footer-text-wrap">
                  <div className="footer-nav">
                   {navlinks}
                  </div>

                  <p className="footer-nav-text">
                  Сайт был разработан <span className="text-yellow">Никитой Ямником</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан<span className="text-yellow">Валерией Бубырь</span>.   
                  </p>
               </div>

               <p className="footer-text">
                   2020, Bсе права защищены
               </p>
               <p className="footer-text">
               Согласие на обработку персональных данных <br/>
					 Политика конфиденциальности
               </p>
            </div>
        </footer >
    );
};

export default Footer;
