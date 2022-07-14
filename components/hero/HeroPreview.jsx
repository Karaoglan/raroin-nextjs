import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroPreview = () => {
  return (
    <div className="hero__index">
      <Image className="sh_1" src="/img/icons/sh_1.png" alt="ImagePreview" width={100} height={100} />
      <Image className="sh_2" src="/img/icons/sh_2.png" alt="ImagePreview" width={100} height={100}/>
      <Image className="sh_3" src="/img/icons/sh_3.png" alt="ImagePreview" width={100} height={100}/>
      <div className="container">
        <div className="row align-items-center justify-content-center mb-70 mt-60">
          <div className="col-lg-auto">
            <Image
              className="Image-fluid d-none d-md-block"
              src="/img/logos/raroin.svg"
              alt="ImagePreview"
              width={100} height={100}
            />
          </div>
          <div className="col-lg-6">
            <div className="hero__left space-y-20">
              <h1 className="hero__title">
                React Template for NFT Marketplace
              </h1>
              <p className="hero__text txt">
                Raroin is a NFT Marketplace Platform template . It’s come with a
                creative design, home page options, different explore and
                digital asset pages and items.
              </p>
              <div
                className="sm:space-x-0 space-x-20 d-flex flex-column flex-md-row
                  sm:space-y-20">
                <Link className="btn btn-white" href="/upload">
                  Create Item
                </Link>
                <Link className="btn btn-white" href="/">
                  Purchase now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="box is__big hero_icons">
              <div className="row">
                <div className="col-lg-4 space-y-10 text-center">
                  <i className="ri-star-line icon is_1" />
                  <p>Rating:</p>
                  <div
                    className="stars d-flex justify-content-center"
                    style={{color: '#FFC700'}}>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <span className="color_black">/ 5*</span>
                  </div>
                </div>
                <div className="col-lg-4 space-y-10 text-center">
                  <i className="ri-price-tag-3-line icon is_2" />
                  <p>Price:</p>
                  <p className="color_black">
                    Starting at <strong> $29</strong>
                  </p>
                </div>
                <div className="col-lg-4 space-y-10 text-center">
                  <i className="ri-information-line icon is_3" />
                  <p>Latest Version:</p>
                  <p className="color_black">
                    <span> 0.0.1</span> , 20 Nov 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPreview;
