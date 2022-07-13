import Link from 'next/link';
import { useState } from 'react';
import MegaMenu from './Menu/MegaMenu';
import MobileMenu from './Menu/MobileMenu';

const HomesMenu = [
  {
    icon: 'home-smile-2',
    title: ' Home page 1',
    link: '/home-1',
  },
  {
    icon: 'home-2',
    title: ' Home page 2',
    link: '/home-2',
  },
  {
    icon: 'home-5',
    title: ' Home page 3',
    link: '/home-3',
  },
];
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
                <li className="has_popup">
                  <a className="color_black is_new" href="/">
                    Homes <i className="ri-more-2-fill" />
                  </a>
                  <ul className="menu__popup space-y-20">
                    {HomesMenu.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" href={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}

                <li className="has_popup2">
                  <a className="color_black is_new hovered" href="/">
                    Pages <i className="ri-more-2-fill" />
                  </a>
                  <ul className="menu__popup2 space-y-20">
                    <MegaMenu />
                  </ul>
                </li>
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
