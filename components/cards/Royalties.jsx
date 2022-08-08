import Image from 'next/image';
import Link from 'next/link';

function Royalties() {
    return (
        <div className='marketplace text-center'>
            <div className='row mb-30_reset mt-70 mx-100 justify-content-between'>
                <h1 className='my-20 headline extrabold'>Royalties</h1>
                <h3 className='headline bold'>
                    This is how musicians and fans can collaborate and share
                    success
                </h3>
            </div>

            <div className='royalties d-flex flex-column flex-md-row m-50 space-x-20 justify-content-center align-items-center text-center '>
                <div className='space-y-10'>
                    <Image
                        src={`/img/bg/musician.png`}
                        alt='nftimage'
                        width={300}
                        height={350}
                    />

                    <h4>Musician sells</h4>
                    <p className='headline semibold'>
                        NFT&apos;s that represent a percentage of royalties from
                        a song or album are sold to fans
                    </p>
                </div>
                <div className='space-y-10'>
                    <Image
                        src={`/img/bg/funbuys.png`}
                        alt='nftimage'
                        width={300}
                        height={350}
                    />

                    <h4>Fan buys</h4>
                    <p className='headline semibold'>
                        Fans buy NFT which gives them ownership in the project
                        and access to VIP features
                    </p>
                </div>
                <div className='space-y-10'>
                    <Image
                        src={`/img/bg/airdrop.png`}
                        alt='nftimage'
                        width={300}
                        height={350}
                    />

                    <h4>Airdrop</h4>
                    <p className='headline semibold'>
                        When royalties are generated tokens are airdropped to
                        NFT holders
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex space-x-20 text-center align-items-center justify-content-center mb-30'>
                    <h1 className='my-20 headline extrabold'>Apply for Drop</h1>
                    <Link href='/apply'>
                        <a className='btn btn-primary'>Apply</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Royalties;
