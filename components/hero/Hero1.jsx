import Link from 'next/link';
import React from 'react';

const Hero1 = () => {
  return (
    <div className="heading">
      <div className="overlay"></div>

      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={'/video/video1.mp4'} type="video/mp4" />
      </video>
      <div className="hero__1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero__left space-y-20">
                <h1 className="hero__title">
                  WEB3
                  MUSIC
                  REVOLUTION
                </h1>
                <p className="hero__text txt">
                  Invest in your favourite Artists & songs.
                  Rare Groove helps musicians & fans collabrate
                  using NFT&apos;s & blockchain technology
                </p>
                <div
                  className="space-x-20 d-flex flex-column flex-md-row
                sm:space-y-20">
                  <a className="btn btn-primary">
                    <Link href="marketplace">
                      Explore
                    </Link>
                  </a>
                  <a className="btn btn-white">
                    <Link href="upload-type">
                      Create
                    </Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
