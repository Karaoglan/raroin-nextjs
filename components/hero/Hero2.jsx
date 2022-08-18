import Link from 'next/link';
import React from 'react';

const CardItems = [
  {
    img: '1',
    price: '4.77',
  },
  {
    img: '2',
    price: '2.45',
  },
  {
    img: '3',
    price: '1.33',
  },
];

function Hero2() {
  return (
    <div>
      <div className="hero__2 py-20">
        <div className="container">

          <div className="section__head">
            <div
              className="d-flex justify-content-between sm-column
                            align-items-center">
              <h2 className="section__title txt_hero_lg"> Latest Drops</h2>
              <Link href="collections">
              <button className="btn btn-primary mt-20"><span className='p-40'>View All</span></button>

              </Link>
            </div>
          </div>
          <div className="wrapper">

            <div className="row">
              {CardItems.map((val, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="card__item one is__hero">
                    <div className="card_body">
                      {/* ???? =============== */}
                      <div className="card_head_home">
                        <Link href="item-details">
                          <img
                            src={`img/items/img${val.img}.png`}
                            alt="prv"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
