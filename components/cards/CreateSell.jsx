function CreateSell() {
  return (
    <div className='marketplace text-center'>
      <div className='row mb-30_reset mt-10 mx-100 justify-content-between'>
        <h1 className='my-20 headline extrabold'>Create & Sell</h1>
      </div>

      <div className='create-sell d-flex flex-column space-y-30 flex-md-row m-50 space-x-20 justify-content-center align-items-center text-center'>
        <div className='space-y-10'>

            <img src=' https://media-public.canva.com/FSjf8/MAEPjtFSjf8/1/t.png' />


          <h4>Setup your wallet</h4>
          <div className='mx-40'>
            Once you&apos;ve set up your wallet of choice, add PulseChain
            network & connect it to Rare Groove by clicking the wallet icon in
            the top right corner.
          </div>
        </div>
        <div className='space-y-10'>

            <img src=' https://media-public.canva.com/9RPNU/MAEviM9RPNU/1/t.png' />


          <h4>Create your collection</h4>
          <div className='mx-40'>
          Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
          </div>
        </div>
        <div className='space-y-10'>

            <img
              className='avatar avatar-sm'
              src=' https://media-public.canva.com/WRcyA/MAD2UVWRcyA/1/t.png'
            />


          <h4>Add your NFTs</h4>
          <div className='md:mx-40'>
          Upload your work (image, music, tickets or 3D art), add a title and description, and customize your NFTs with properties and unlockable content.
          </div>
        </div>
        <div className='space-y-10'>
          <div>
            <img src='https://media-public.canva.com/2EtsM/MADfI12EtsM/2/t.png' />
          </div>

          <h4>List them for sale</h4>
          <div className='md:mx-40'>
          Choose between auctions, fixed-price listings, You choose how you want to sell your NFTs, and we help you sell them!
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSell;
