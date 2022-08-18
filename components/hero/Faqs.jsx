import Image from 'next/image';
import useBreakpoints from '../hooks/_customHooks';

function Faqs() {
  let imageResponsiveWidth = 300;
  let imageResponsiveHeight = 250;
  const imageSizeMultiplier = useBreakpoints() === 'sm' ? 1 : 2;

  return (
    <div className='faqs py-20'>
      <div className='container'>
        <div className='d-flex pt-5 mb-4 justify-content-center justify-content-md-start'>
          <h1 className='txt_hero_lg '>FAQ&apos;S</h1>
        </div>
        <div className='d-flex flex-column flex-md-row'>
          <div className='col-md-6 space-y-30 text-center'>
            <p className='txt_lg text-md-left'>
              Answering your questions before you arrive at the NFT music awards
            </p>
            <Image src={'/img/bg/headphone.png'} width={imageResponsiveWidth * imageSizeMultiplier} height={imageResponsiveHeight * imageSizeMultiplier} />
          </div>
          <div className='col-md-6 space-y-30 text-center'>
            <div>
              <a className='p-3 btn btn-primary txt_lg'>What is NFT?</a>

              <p className='txt_lg'>
                NFT stands for &quot;non-fungible token&quot; and is recorded in the
                blockchain, allowing NFTs to be sold and traded.
              </p>

            </div>

            <div>
              <a className='p-3 btn btn-primary txt_lg'>How do I get started?</a>

              <p className='txt_lg'>
                Simply connect your digital wallet such as &quot;Metamask&quot; and start
                buying and selling NFT&apos;s
              </p>
            </div>

            <div>
              <a className='p-3 btn btn-primary txt_lg'>Should I invest?</a>

              <p className='txt_lg'>Investing is completely up to you </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
