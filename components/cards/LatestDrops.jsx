import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { ethers } from 'ethers';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { injected } from '../../helpers/connectors';
import { ipfsToHTTPS } from "../../helpers/util";

/*
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
*/

function LatestDrops() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();

  const [cardItems, setCardItems] = useState([
    //dummy
    {
      img: `https://media-public.canva.com/0xi1g/MAEWmt0xi1g/1/s.jpg`,
      price: 1,
      title: "Good Waves",
      avatar_name1: 'Burak',
      avatar_img1: '13',
      avatar_img2: '14',
      avatar_name2: 'mucky_art',
      likes: '11.5',
      stock: '9',
      tokenId: 2
    },
    {
      img: `https://media-private.canva.com/MADFjTf6XxQ/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220803T033700Z&X-Amz-Expires=31008&X-Amz-Signature=8b0850deba49a40384f4bee245cc3457d95f9064fecb7945840008194858eb1a&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2003%20Aug%202022%2012%3A13%3A48%20GMT`,
      price: 2,
      title: "Bloody",
      avatar_name1: 'Burak',
      avatar_img1: '13',
      avatar_img2: '14',
      avatar_name2: 'mucky_art',
      likes: '11.5',
      stock: '9',
      tokenId: 3
    },
    {
      img: `https://media-private.canva.com/1BxcU/MAEE8u1BxcU/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220802%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220802T115710Z&X-Amz-Expires=87660&X-Amz-Signature=4a5dd7ac8b664db35a44d899940ebd5e123dd2ce35b0c9ef9b0e6b76a08890a3&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2003%20Aug%202022%2012%3A18%3A10%20GMT`,
      price: 5,
      title: "Crazy",
      avatar_name1: 'Burak',
      avatar_img1: '13',
      avatar_img2: '14',
      avatar_name2: 'mucky_art',
      likes: '11.5',
      stock: '9',
      tokenId: 6
    }
  ]);
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const { chainId, account, activate, active, library } = useWeb3React();

  const getListedItems = async () => {
    setLoading(true);

    const res = await axios.post(
      'https://api.studio.thegraph.com/query/31385/nft-marketplace/v0.0.1',
      {
        query: `
          {
            nfts(first: 3, orderBy: id, orderDirection: desc) {
              id
              seller
              owner
              price,
              sold,
              tokenURI
            }
          }
        `
      }
    )

    let data = await Promise.all(res.data.data.nfts.map(async (item) => {
      const prx = item['price'];
      setTokenId(item['id'].toString());
      const tokenURI = item['tokenURI'].toString();
      setPrice(ethers.utils.formatEther(prx));

      return await axios.get(ipfsToHTTPS(tokenURI));
    }))

    data = data.map(response => {
      return {
        img: ipfsToHTTPS(response.data.image),
        price,
        title: response.data.name,
        avatar_name1: 'Burak',
        avatar_img1: '13',
        avatar_img2: '14',
        avatar_name2: 'mucky_art',
        likes: '11.5',
        stock: '9',
        tokenId
      }
    });

    setCardItems([...data]);
    setLoading(false);
  };

  useEffect(() => {
    console.log(chainId, account, active, library);
    callActivate();
  }, [chainId, account, active]);

  const callActivate = async () => {
    if (active) {
      getListedItems();
    } else {
      await activate(injected);
      console.log(account);
    }
  }

  

  return (
    <div className='marketplace'>
      <div className="row mb-30_reset mt-10 mx-100 justify-content-between">
        <h1 className='my-20 headline extrabold'>Latest Drops</h1>



        {(loading || !cardItems) && '!NO CONTENT'}
        {!loading && cardItems.map((val, i) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
            <div className="card__item four">
              <div className="card_body space-y-10">
                {/* =============== */}
                <div className="creators space-x-10">
                  <div className="avatars space-x-3">
                    <Link href="profile">
                      <img
                        src={val.img}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                    <Link href="profile">
                      <p className="avatars_name txt_xs">@{val.avatar_name1}</p>
                    </Link>
                  </div>
                  <div className="avatars space-x-3">
                    <Link href="profile">
                      <img
                        src={`img/avatars/avatar_${val.avatar_img2}.png`}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                    <Link href="profile">
                      <p className="avatars_name txt_xs">@{val.avatar_name2}</p>
                    </Link>
                  </div>
                </div>
                <div className="card_head">
                  <Link href="Item-details">
                    <img src={val.img} alt="nftimage" />
                  </Link>
                  <a href="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill" />
                    <span className="txt_sm">{val.likes}k</span>
                  </a>
                </div>
                {/* =============== */}
                <h6 className="card_title">{val.title}</h6>
                <div className="card_footer d-block space-y-10">
                  <div className="card_footer justify-content-between">
                    <div className="creators">
                      <p className="txt_sm"> {val.stock} in stock</p>
                    </div>
                    <Link href="#">
                      <p className="txt_sm">
                        Price:
                        <span
                          className="color_green
                                                txt_sm">
                          {val.price} ETH
                        </span>
                      </p>
                    </Link>
                  </div>
                  <div className="hr" />
                  <div
                    className="d-flex
								align-items-center
								space-x-10
								justify-content-between">
                    <div
                      className="d-flex align-items-center
									space-x-5">
                      <i className="ri-history-line" />
                      <Popup
                        className="custom"
                        ref={ref}
                        trigger={
                          <button className="popup_btn">
                            <p
                              className="color_text txt_sm view_history"
                              style={{ width: 'auto' }}>
                              View History
                            </p>
                          </button>
                        }
                        position="bottom center">
                        <div>
                          <div
                            className="popup"
                            id="popup_bid"
                            tabIndex={-1}
                            role="dialog"
                            aria-hidden="true">
                            <div>
                              <button
                                type="button"
                                className="button close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={closeTooltip}>
                                <span aria-hidden="true">×</span>
                              </button>
                              <div className="space-y-20">
                                <h4> History </h4>
                                <div className="creator_item creator_card space-x-10">
                                  <div className="avatars space-x-10">
                                    <div className="media">
                                      <div className="badge">
                                        <img
                                          src={`img/icons/Badge.svg`}
                                          alt="Badge"
                                        />
                                      </div>
                                      <Link href="profile">
                                        <img
                                          src={`img/avatars/avatar_1.png`}
                                          alt="Avatar"
                                          className="avatar avatar-md"
                                        />
                                      </Link>
                                    </div>
                                    <div>
                                      <p className="color_black">
                                        Bid accepted
                                        <span className="color_brand">
                                          1 ETH
                                        </span>
                                        by
                                        <Link
                                          className="color_black txt
						_bold"
                                          href="profile">
                                          ayoub
                                        </Link>
                                      </p>
                                      <span className="date color_text">
                                        28/06/2021, 12:08
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="creator_item creator_card space-x-10">
                                  <div className="avatars space-x-10">
                                    <div className="media">
                                      <div className="badge">
                                        <img
                                          src={`img/icons/Badge.svg`}
                                          alt="Badge"
                                        />
                                      </div>
                                      <Link href="profile">
                                        <img
                                          src={`img/avatars/avatar_2.png`}
                                          alt="Avatar"
                                          className="avatar avatar-md"
                                        />
                                      </Link>
                                    </div>
                                    <div>
                                      <p className="color_black">
                                        Bid accepted
                                        <span className="color_brand">
                                          3 ETH
                                        </span>
                                        by
                                        <Link
                                          className="color_black txt
						_bold"
                                          href="profile">
                                          monir
                                        </Link>
                                      </p>
                                      <span className="date color_text">
                                        22/05/2021, 12:08
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </div>

                    <Popup
                      className="custom"
                      ref={ref}
                      trigger={
                        <button className="btn btn-sm btn-primary">
                          Place Bid
                        </button>
                      }
                      position="bottom center">
                      <div>
                        <div
                          className="popup"
                          id="popup_bid"
                          tabIndex={-1}
                          role="dialog"
                          aria-hidden="true">
                          <div>
                            <button
                              type="button"
                              className="button close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={closeTooltip}>
                              <span aria-hidden="true">×</span>
                            </button>
                            <div className=" space-y-20">
                              <h3>Place a Bid</h3>
                              <p>
                                You must bid at least
                                <span className="color_black">15 ETH</span>
                              </p>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="00.00 ETH"
                              />
                              <p>
                                Enter quantity.
                                <span className="color_green">5 available</span>
                              </p>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={1}
                              />
                              <div className="hr" />
                              <div className="d-flex justify-content-between">
                                <p> You must bid at least:</p>
                                <p className="text-right color_black txt _bold">
                                  67,000 ETH
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p> service free:</p>
                                <p className="text-right color_black txt _bold">
                                  0,901 ETH
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p> Total bid amount:</p>
                                <p className="text-right color_black txt _bold">
                                  56,031 ETH
                                </p>
                              </div>
                              <Popup
                                className="custom"
                                ref={ref}
                                trigger={
                                  <button className="btn btn-primary w-full">
                                    Place a bid
                                  </button>
                                }
                                position="bottom center">
                                <div>
                                  <div
                                    className="popup"
                                    id="popup_bid"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-hidden="true">
                                    <div>
                                      <button
                                        type="button"
                                        className="button close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={closeTooltip}>
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <div className="space-y-20">
                                        <h3 className="text-center">
                                          Your Bidding Successfuly Added
                                        </h3>
                                        <p className="text-center">
                                          your bid
                                          <span
                                            className="color_text txt
      _bold">
                                            (16ETH)
                                          </span>
                                          has been listing to our database
                                        </p>
                                        <Link
                                          href="#"
                                          className="btn btn-dark w-full">
                                          Watch the listings
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='view-all mr-100 mt-20'>
        <Link href="/marketplace">
          <a className='btn btn-black btn-primary'>View All</a>
        </Link>
      </div>
    </div>
  );
}

export default LatestDrops;
