import Link from 'next/link';

function ApplyDrop() {
  return (
    <div className='row'>
      <div className='d-flex space-x-20 text-center align-items-center justify-content-center mb-30'>
        <h1 className='my-20 headline extrabold'>Apply for Drop</h1>
        <h3 className='headline bold'>collaborate and share success </h3>
        <Link href='/apply'>
          <a className='btn btn-primary'>Apply</a>
        </Link>
      </div>
      <div className='user-friendly text-center align-items-center justify-content-center'>
        <h1 className='my-20 headline extrabold'>User Friendly Features</h1>
        <div className='d-flex mx-100 justify-content-between text-center align-items-center justify-content-center'>
          <div className='col-xl-3 p-20 feature'>
            <div className='text-center align-items-center justify-content-center'>
            <h3>Bulk Upload</h3>
            <p>
              Sellers can upload collections of 10,000+ NFTs all at once. Simply
              drag and drop and watch your NFTs go live
            </p>
            </div>
          </div>
          <div className='col-xl-3 p-20 feature'>
            <h3>Low Gas</h3>
            <p>
              Buyers of NFT&apos;s will pay almost zero gas fees if you mint on
              PulseChain, Binance or Polygon
            </p>
          </div>
          <div className='col-xl-3 p-20 feature'>
            <h3>Multi-Chain</h3>
            <p>
              The default blockchain we use is PulseChain which makes it faster
              and cheaper to transact on. You can also switch between Binance &
              Polygon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyDrop;
