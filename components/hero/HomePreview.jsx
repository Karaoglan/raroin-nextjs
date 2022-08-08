import Image from 'next/image';
import Link from 'next/link';

const HomePreview = () => {
    return (
        <>
            <div className='hero__index'>
                <video preload autoPlay muted playsinline loop>
                    <source src='/video/video1.mp4' type='video/mp4' />
                </video>
                <div className='overlay'>
                    <div className='home-content p-50 space-y-10'>
                        <h1 className='hero__title'>WEB3</h1>
                        <h1 className='hero__title'>MUSIC</h1>
                        <h1 className='hero__title'>REVOLUTION</h1>
                        <div>
                            <p className='hero__text txt'>
                                Invest in your favourite Artists & songs.
                            </p>
                            <p>Rare Groove helps musicians & fans collabrate</p>
                            <p>using NFT&apos;s & blockchain technology</p>
                        </div>
                        <div
                            className='space-x-20 d-flex flex-md-row' >
                            <Link href='/explore'>
                                <a className='btn btn-primary'>Explore</a>
                            </Link>
                            <Link href='/upload'>
                                <a className='btn btn-white'>Create</a>
                            </Link>
                        </div>
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
            <div className='leading-home row align-items-center justify-content-center text-center px-100 pb-100 space-y-2'>
                <div className="leading-home1">
                    <Image
                        src={`/img/bg/image1.png`}
                        alt='image-blocks'
                        layout='fill'
                    />
                </div>
                <span>
                    <h1 className='headline extrabold'>
                        The World&apos;s Most Feature Rich
                    </h1>
                    <span>
                        <h2 className='subheadline medium'>
                            Music NFT Platform
                        </h2>
                        <p>
                            Rare Groove connects musicians with fans directly
                            using NFT&apos;s & blockchain technology. Our
                            mission is to disrupt the music industry with
                            innovative features such as blockchain streaming,
                            NFT royalties, collectables and concert tickets.
                            Imagine artists and fans collaborating and
                            succeeding together without centralised control.
                            Rare Groove makes this happen
                        </p>
                    </span>
                </span>
            </div>
        </>
    );
};

export default HomePreview;
