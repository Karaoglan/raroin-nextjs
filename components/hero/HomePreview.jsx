import Image from 'next/image';
import Link from 'next/link';

const HomePreview = () => {
  return (
    <>
      <div className='hero__index'>
        <video id='video1' preload autoPlay muted playsinline loop>
          <source src='/video/video1.mp4' type='video/mp4' />
        </video>
        <div className='overlay'></div>
        <div className='home-content'>
          <h1 className='hero__title'>WEB3 MUSIC DECENTRALISED</h1>
          <p className='hero__text txt'>
            Invest in your favourite Artists & songs.
          </p>
          <p>Rare Groove helps musicians & fans collabrate</p>
          <p>using NFT&apos;s & blockchain technology</p>
          <div
            className='sm:space-x-0 space-x-20 d-flex flex-column flex-md-row
                  sm:space-y-20'
          >
            <Link href='/explore'>
              <a className='btn btn-primary'>Explore</a>
            </Link>
            <Link href='/upload'>
              <a className='btn btn-white'>Create</a>
            </Link>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-90 mt-100'>
            <div className='col-lg-6'>
              <div className='hero__left'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='leading-home align-items-center justify-content-center p-100'>
        <span>
          <h2>LEADING THE WAY FOR A</h2>
          <h2>DECENTRALISED MUSIC </h2>{' '}
          <span>
            <h2>
              INDUSTRY{' '}
              <Image
                src={`/img/icons/heartbeat.png`}
                className='heartbeat'
                width={50}
                height={50}
                alt='heart_beat'
              />
            </h2>
          </span>
        </span>
      </div>
    </>
  );
};

export default HomePreview;
