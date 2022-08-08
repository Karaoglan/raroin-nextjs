import Image from 'next/image';
import Link from 'next/link';

const RareExplore = () => {
    return (
        <>
            <div className='explore row text-center'>
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
                <div>
                    <div className='p-100'>
                        <video preload autoPlay muted playsinline loop>
                            <source src='/video/video2.mp4' type='video/mp4' />
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
        </>
    );
};

export default RareExplore;
