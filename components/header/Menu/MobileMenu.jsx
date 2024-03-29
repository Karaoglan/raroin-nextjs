import Link from 'next/link';
import React from 'react';

const Menu = [
  {
    title: ' Home page 1',
    link: '/home-1',
  },
  {
    title: ' Home page 2',
    link: '/home-2',
  },
  {
    title: ' Home page 3',
    link: '/home-3',
  },
  {
    title: 'Marketplace',
    link: 'Marketplace',
  },
  {
    title: 'Collections',
    link: 'Collections',
  },
  {
    title: 'Profile',
    link: 'Profile',
  },
  {
    title: 'Creators',
    link: 'Creators',
  },
];
function MobileMenu() {
  return (
    <div>
      <div className="header__mobile__menu space-y-40">
        <ul className="d-flex space-y-20">
          {Menu.map((val, i) => (
            <li key={i}>
            <Link href={val.link} className="color_black">
              {val.title}
            </Link>
          </li>
          ))}
        </ul>
        <div className="space-y-20">
          <div className="header__search in_mobile w-full">
            <input type="text" placeholder="Search" />
            <button className="header__result">
              <i className="ri-search-line" />
            </button>
          </div>
          <a className="btn btn-grad btn-sm" href="connect-wallet">
            Connect wallet
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
