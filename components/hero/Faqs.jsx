import Image from 'next/image';

function Faqs() {
  return (
    <div className='faqs'>
      <div className='d-flex flex-column flex-md-row p-60 space-x-40'>
        <div className='col-md-6 space-y-10'>
          <h1 className='my-40 txt_hero_lg'>FAQ&apos;S</h1>
          <p className='txt_lg'>
            Answering your questions before you arrive at the NFT music awards
          </p>
          <Image src={'/img/bg/headphone.png'} width={600} height={500} />
        </div>
        <div className='col-xl-6 space-y-30 text-center mt-60'>
          <div className='space-y-10'>
            <a className='p-3 btn btn-primary txt_lg'>What is NFT?</a>

            <p className='txt_lg'>
              NFT stands for &quot;non-fungible token&quot; <br/> and is recorded in the
              blockchain, <br/> allowing NFTs to be sold and traded.
            </p>
          </div>

          <div className='space-y-10'>
            <a className='p-3 btn btn-primary txt_lg'>How do I get started?</a>

            <p className='txt_lg'>
              Simply connect your digital wallet <br/> such as &quot;Metamask&quot; and start
              buying <br/> and selling NFT&apos;s
            </p>
          </div>

          <div className='space-y-10'>
            <a className='p-3 btn btn-primary txt_lg'>Should I invest?</a>

            <p className='txt_lg'>Investing is completely up to you </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
