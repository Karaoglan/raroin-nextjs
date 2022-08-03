function Royalties() {
  return (
    <div className='marketplace text-center'>
      <div className='row mb-30_reset mt-70 mx-100 justify-content-between'>
        <h1 className='my-20 headline extrabold'>Royalties</h1>
        <h3 className='headline bold'>
          This is how musicians and fans can collaborate and share success
        </h3>
      </div>

      <div className='royalties d-flex m-50 space-x-20 justify-content-center align-items-center text-center '>
        <div className='space-y-10'>
          <img src={`img/items/item_2.png`} alt='nftimage' />

          <h4>Musician sells</h4>
          <p className='headline semibold'>
            NFT&apos;s that represent a percentage of royalties from a song or
            album are sold to fans
          </p>
        </div>
        <div className='space-y-10'>
          <img src={`img/items/item_2.png`} alt='nftimage' />

          <h4>Fan buys</h4>
          <p className='headline semibold'>
            Fans buy NFT which gives them ownership in the project and access to
            VIP features
          </p>
        </div>
        <div className='space-y-10'>
          <img src={`img/items/item_2.png`} alt='nftimage' />

          <h4>Airdrop</h4>
          <p className='headline semibold'>
            When royalties are generated tokens are airdropped to NFT holders
          </p>
        </div>
      </div>
    </div>
  );
}

export default Royalties;
