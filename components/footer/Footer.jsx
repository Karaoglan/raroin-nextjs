import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer__1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
              <Link href='/'>
                        <Image
                            className='header__logo'
                            id='logo_js'
                            src='/img/bg/logo.png'
                            alt='logo'
                            width={200}
                            height={100}
                        />
                    </Link>
              </div>
              <p className="footer__text">
                raroin is a shared liquidity NFT market smart contract
              </p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  <li>
                    <a href="https://www.facebook.com/" rel="noreferrer"  target="_blank">
                      <i className="ri-facebook-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.messenger.com/" rel="noreferrer"  target="_blank">
                      <i className="ri-messenger-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                      <i className="ri-whatsapp-line"  />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                      <i className="ri-youtube-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Raroin</h6>
              <ul className="footer__list">
                <li>
                  <Link href="home-1"> Home1 </Link>
                </li>
                <li>
                  <Link href="home-2"> Home2</Link>
                </li>
                <li>
                  <Link href="home-3"> Home3 </Link>
                </li>
                <li>
                  <Link href="marketplace"> Marketplace</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Assets</h6>
              <ul className="footer__list">
                <li>
                  <Link href="profile"> Profile </Link>
                </li>
                <li>
                  <Link href="creators"> Creators </Link>
                </li>
                <li>
                  <Link href="collections"> Colletctions </Link>
                </li>
                <li>
                  <Link href="Activity"> Activity</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list">
                <li>
                  <Link href="upload-type"> Upload Types </Link>
                </li>
                <li>
                  <Link href="upload"> Upload </Link>
                </li>
                <li>
                  <Link href="connect-wallet"> Connect wallet</Link>
                </li>
                <li>
                  <Link href="item-details"> Item details </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright text-center">
            Copyright © 2021. Created with love by creabik.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
