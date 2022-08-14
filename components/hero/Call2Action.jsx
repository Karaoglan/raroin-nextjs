import Image from "next/image";

function Call2action() {
  return (
    <div className="call2action is__light">
      <div className="container">
        <div
          className="d-flex flex-column flex-md-row-reverse justify-content-between align-items-center
                sm:space-y-20">
          <div className="col-md-4">
            <Image
              className="img-fluid img__logo"
              alt="rr"
              width={800}
              height={800}
              src={`/img/logos/blockchain.png`}
            />
          </div>
          <div className="col-md-8">
            <div className="space-y-20 justify-content-end">
              <h1 className="txt_hero_lg">The World&apos;s Most <br /> Feature Rich</h1>
              <h2 style={{ color: '#8328e6' }}>Music NFT Platform</h2>
              <p className="txt_lg color_text section__text">
                Rare Groove connects musicians with fans directly
                using NFT&apos;s & blockchain technology. Our
                mission is to disrupt the music industry with
                innovative features such as blockchain streaming,
                NFT royalties, collectables and concert tickets.
                Imagine artists and fans collaborating and
                succeeding together without centralised control.
                Rare Groove makes this happen
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Call2action;
