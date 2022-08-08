import Image from 'next/image';

/**
 * 
  <h3 className='headline bold'>collaborate and share success </h3>

 */

function UserFriendlyFeatures() {
    return (
        <div className='row'>
            <div className='user-friendly text-center align-items-center justify-content-center'>
                <h1 className='my-20 headline extrabold space-y-10 '>
                    User Friendly Features
                </h1>
                <div className='d-flex flex-column flex-md-row mx-40 my-40 justify-content-around align-items-around'>
                    <div className='col-xl-3 p-10 mb-10'>
                        <Image
                            src={'/img/bg/logo-blue.png'}
                            width={65}
                            height={65}
                        />
                        <h3>Bulk Upload</h3>
                        <p>
                            Sellers can upload collections of 10,000+ NFTs all
                            at once. Simply drag and drop and watch your NFTs go
                            live
                        </p>
                    </div>
                    <div className='col-xl-3 p-10 mb-10'>
                        <Image
                            src={'/img/bg/logo-blue.png'}
                            width={65}
                            height={65}
                        />

                        <h3>Low Gas</h3>
                        <p>
                            Buyers of NFT&apos;s will pay almost zero gas fees
                            if you mint on PulseChain
                        </p>
                    </div>
                    <div className='col-xl-3 p-10 mb-10'>
                        <Image
                            src={'/img/bg/logo-blue.png'}
                            width={65}
                            height={65}
                        />

                        <h3>Multi-Chain</h3>
                        <p>
                            The default blockchain we use is PulseChain which
                            makes it faster and cheaper to transact on. You can
                            also switch to Ethereum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserFriendlyFeatures;
