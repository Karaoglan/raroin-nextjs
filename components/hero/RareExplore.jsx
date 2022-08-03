import Link from 'next/link';

const RareExplore = () => {
  return (
    <>
      <div className='explore row my-200 space-y-60 text-center'>
        <div className='header__logo'>
          <Link href='/'>
            <img
              className='header__logo'
              id='logo_js'
              src='/img/logos/Logo.svg'
              alt='logo'
            />
          </Link>
        </div>
        <div>
          <div>VIDEO</div>
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
    </>
  );
};

export default RareExplore;
