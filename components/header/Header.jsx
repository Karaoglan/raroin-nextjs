import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './Menu/MobileMenu';

const PagesMenu = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Collections',
    link: '/collections',
  },
  {
    title: ' Profile',
    link: '/profile',
  },
  {
    title: 'Creators',
    link: '/creators',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('sticky') : header.classList.remove('sticky');
  };

  return (
    <div className='header-sticky'>

      <header className="header__1 header-section d-none d-xl-block">
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
