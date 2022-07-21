
const Explore = () => {
  return (
    <>
      <div className="marketplace row mt-100 mx-100">
        <h3 className='mb-30'>EXPLORE</h3>
        <div>
          <div className="row mb-30_reset  align-items-center justify-content-center space-x-100">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  <div className="card_head">
                    <img src={`img/items/item_1.png`} alt="nftimage" />

                  </div>
                </div>

              </div>
              <h4>Royalties</h4>
              <p>Musicians can crowfund new projects by selling royalty ownership in the form of NFT&apos;S. If the song or album
                succeeds everyone wins
              </p>

            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  <div className="card_head">
                    <img src={`img/items/item_2.png`} alt="nftimage" />
                  </div>
                </div>
              </div>
              <h4>Collectables</h4>
              <p>Masters, exclusive music, lyrics, 3D avatars & album art is available as NFT&apos;S for fans and collectors</p>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                <div className="card_body space-y-10">
                  <div className="card_head">
                    <img src={`img/items/item_3.png`} alt="nftimage" />
                  </div>
                </div>
              </div>
              <h4>Concert Tickets</h4>
              <p>Purchase a ticket and watch your favourite artists live in concert or in the metaverse</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
