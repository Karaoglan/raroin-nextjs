function Faqs() {
  return (
    <div className='faqs d-flex m-120 space-x-30'>
      <div className='col-xl-6 space-y-10'>
        <h1>FAQ&apos;S</h1>
        <p>
          Answering your questions before you arrive at the NFT music awards
        </p>
        <img src={'/img/bg/music.png'} />
      </div>
      <div className='col-xl-6 space-y-20 text-center mt-60'>
        <div>
          <div className='header__btns'>
            <a className='btn btn-gray'>What is NFT?</a>
          </div>

          <p>
            NFT stands for &quot;non-fungible token&quot; and is recorded in the
            blockchain, allowing NFTs to be sold and traded.
          </p>
        </div>

        <div>
          <div className='header__btns'>
            <a className='btn btn-gray'>How do I get started?</a>
          </div>

          <p>
            Simply connect your digital wallet such as &quot;Metamask&quot; and start
            buying and selling NFT&apos;s
          </p>
        </div>

        <div>
          <div className='header__btns'>
            <a className='btn btn-gray'>Should I invest?</a>
          </div>

          <p>Investing is completely up to you </p>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
