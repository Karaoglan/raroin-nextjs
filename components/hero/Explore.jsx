import Link from 'next/link';

const Explore = () => {
  return (
    <>
      <div className='marketplace explore row my-200 space-y-60'>
        <div className='view-all mt-20'>
          <Link href='/marketplace'>
            <a className='btn btn-black btn-primary mr-80'>View All</a>
          </Link>
        </div>
        <div>
          <h1 className='text-center'>Explore The Rare Groove Marketplace</h1>
        </div>

        <div className='create-sell d-flex space-x-10 justify-content-center align-items-center text-center '>
          <div className='space-y-10'>
            <img src={`img/items/item_2.png`} alt='nftimage' />

            <h4>Collectables</h4>
            <p>
              Masters, exclusive music, lyrics, 3D avatars & album art is
              available as NFT&apos;S for fans and collectors
            </p>
          </div>
          <div className='space-y-10'>
            <img src={`img/items/item_1.png`} alt='nftimage' />

            <h4>Royalties</h4>
            <p>
              Musicians can crowfund new projects by selling royalty ownership
              in the form of NFT&apos;S. If the song or album succeeds everyone
              wins
            </p>
          </div>
          <div className='space-y-10'>
            <img src={`img/items/item_3.png`} alt='nftimage' />

            <h4>Tickets</h4>
            <p>
              Purchase a ticket and watch your favourite artists live in concert
              or in the metaverse
            </p>
          </div>
          <div className='space-y-10'>
            <img src={`img/items/item_3.png`} alt='nftimage' />

            <h4>Listen</h4>
            <p>
              Stream music on the blockchain. Upload & earn RGV tokens. Tip your
              favourite artists
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
