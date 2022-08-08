import Image from 'next/image';
import Link from 'next/link';

const Explore = () => {
    return (
        <>
            <div className='marketplace explore row space-y-60'>
                <div className='view-all pr-40 pt-20'>
                    <Link href='/marketplace'>
                        <a className='btn btn-black btn-primary'>View All</a>
                    </Link>
                </div>
                <div>
                    <h1 className='text-center'>
                        Explore The Rare Groove Marketplace
                    </h1>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-center'>
                    <div className='explore-section space-y-10 mb-20 ml-10'>
                        <Image
                            src={`/img/bg/collectables.png`}
                            alt='nftimage'
                            width={450}
                            height={300}
                        />

                        <h4>Collectables</h4>
                        <p>
                            Original masters, avatars, merchandise & <br />{' '}
                            beats are available as NFT&apos;S
                        </p>
                    </div>
                    <div className='explore-section space-y-10  mb-20 ml-10'>
                        <Image
                            src={`/img/bg/royalties.png`}
                            alt='nftimage'
                            width={450}
                            height={300}
                        />

                        <h4>Royalties</h4>
                        <p>
                            Musicians and fans can collabrate
                            <br />
                            on new music and share streaming royalties
                        </p>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-center pb-60'>
                    <div className='explore-section space-y-10 mb-20 ml-10'>
                        <Image
                            src={`/img/bg/nfttickets.png`}
                            alt='nftimage'
                            width={450}
                            height={300}
                        />
                        <h4>NFTickets</h4>
                        <p>
                            Purchase NFT tickets and watch your favourite <br />
                            artists live in concert or in the Metaverse
                        </p>
                    </div>
                    <div className='explore-section space-y-10 mb-20 ml-10'>
                        <Image
                            src={`/img/bg/listen.png`}
                            alt='nftimage'
                            width={450}
                            height={300}
                        />

                        <h4>Listen</h4>
                        <p>
                            Stream music on the blockchain. Upload & <br/> earn RGV
                            tokens. Tip your favourite artists
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;
