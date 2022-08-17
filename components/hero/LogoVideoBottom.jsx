import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoVideoBottom = () => {
  return (
    <div className='explore-rare row text-center'>
                <div className='header__logo'>
                    <Link href='/'>
                        <Image
                            className='header__logo'
                            id='logo_js'
                            src='/img/bg/logo-trs.png'
                            alt='logo'
                            width={200}
                            height={100}
                        />
                    </Link>
                </div>
                <div className='d-flex flex-column justify-content-center align-content-center'>
                    <div className='sm:p-0 sm:pb-30 p-40'>
                        <video width={'100%'} controls>
                            <source  src='/video/video2.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div
                        className='sm:space-x-0 space-x-20 d-flex flex-column flex-md-row
                  sm:space-y-20 align-items justify-content-center mb-20'
                    >
                        <Link href='/explore'>
                            <a className='btn btn-primary'>Explore</a>
                        </Link>
                        <Link href='/upload'>
                            <a className='btn btn-white'>Create</a>
                        </Link>
                    </div>
                </div>
            </div>
  );
};

export default LogoVideoBottom;
