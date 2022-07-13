import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PreviewFooter = () => {
  return (
    <footer className="bg_white py-20">
      <div className="container px-xl-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-auto text-xl-left logo_holder">
            <a href="/">
              <Image
                className="header__logo"
                id="logo_js"
                src="/img/logos/Logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="col-lg-auto semibold space-x-20 links bottom0menu">
            <Link href="mailto:creabik@gmail.com" className="link color_text">
              Support
            </Link>
            <Link
              href="https://themeforest.net/user/creabik"
              className="link
              color_text">
              Creabik Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PreviewFooter;
