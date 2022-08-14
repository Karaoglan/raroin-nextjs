import Link from 'next/link';
import React from 'react';

const Hero1 = () => {
  return (
    <div className="hero-heading">
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
                  WEB3 <br />
                  MUSIC <br />
                  REVOLUTION
                </h1>
                <p className="txt_lg">
                  Invest in your favourite Artists & songs.
                  Rare Groove helps musicians & fans collabrate
                  using NFT&apos;s & blockchain technology
                </p>
                <div
                  className="space-x-20 d-flex flex-column flex-md-row
                sm:space-y-20">
                    <Link href="marketplace">
                      <button className="btn btn-primary"><span className='p-40'>Explore</span></button>
                    </Link>

                    <Link href="upload">
                    <button className="btn btn-white"><span className='p-40'>Create</span></button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
