import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './Menu/MobileMenu';

const PagesMenu = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Tickets',
    link: '/tickets',
  },
  {
    title: 'Collectables',
    link: '/collectables',
  },
  {
    title: ' Royalties',
    link: '/royalties',
  },
  {
    title: 'Music',
    link: '/music',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link href="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="/img/logos/Logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" href={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ================= */}
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <a href="no-results" className="header__result">
                <i className="ri-search-line" />
              </a>
            </div>
            <div className="header__btns">
              <a className="btn btn-grad btn-sm" href="connect-wallet">
                <i className="ri-wallet-3-line" />
                Connect wallet
              </a>
            </div>
            <div className="header__burger js-header-burger" onClick={toggleClass} />
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible' : null} `}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
