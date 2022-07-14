import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getContract } from "../../helpers/contract";
import { ethers } from "ethers";
import axios from 'axios';

const CardItems = [
  {
    avatar_img1: '1',
    avatar_name1: 'mickel_fenn',
    avatar_img2: '2',
    avatar_name2: 'danil_pannini',
    likes: '1.2',
    img: '1',
    title: 'Colorful Abstract Painting',
    price: '2.45',
    stock: '4',
  },
  {
    avatar_img1: '3',
    avatar_name1: 'mazanov_sky',
    avatar_img2: '4',
    avatar_name2: 'mucky_fennouni',
    likes: '13.2',
    img: '/img/items/item_2.png',
    title: 'The girl with the firefly',
    price: '2.55',
    stock: '12',
  },
  {
    avatar_img1: '5',
    avatar_name1: 'jimmy_dom',
    avatar_img2: '6',
    avatar_name2: 'kristian_sefroui',
    likes: '1.2',
    img: '/img/items/item_3.png',
    title: 'Dodo hide the seek',
    price: '2.45',
    stock: '6',
  },
  {
    avatar_img1: '1',
    avatar_name1: 'Alvin_nov',
    avatar_img2: '7',
    avatar_name2: 'mucky_holiman',
    likes: '4.1',
    img: '/img/items/item_4.png',
    title: 'Liquid Forest Princess',
    price: '0.55',
    stock: '34',
  },
  {
    avatar_img1: '8',
    avatar_name1: 'stivan_rominok',
    avatar_img2: '9',
    avatar_name2: 'danil_pan',
    likes: '6.4',
    img: '/img/items/item_5.png',
    title: 'Spider Eyes Modern Art',
    price: '1.45',
    stock: '7',
  },
  {
    avatar_img1: '10',
    avatar_name1: 'mazanov_sky',
    avatar_img2: '11',
    avatar_name2: 'mucky_art',
    likes: '13.2',
    img: '/img/items/item_6.png',
    title: 'Synthwave Painting',
    price: '0.055',
    stock: '2',
  },
  {
    avatar_img1: '12',
    avatar_name1: 'jimmy_dom',
    avatar_img2: '5',
    avatar_name2: 'kristian_fel',
    likes: '1.6',
    img: '/img/items/item_7.png',
    title: 'Contemporary Abstract',
    price: '0.95',
    stock: '34',
  },
  {
    avatar_img1: '13',
    avatar_name1: 'Alvin_nov',
    avatar_img2: '14',
    avatar_name2: 'mucky_art',
    likes: '11.5',
    img: '/img/items/item_8.png',
    title: 'Valkyrie Abstract Art',
    price: '3.55',
    stock: '9',
  },
];

function CardMarketplace() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();

  const [cardItems, setCardItems] = useState(CardItems);
  const [loading, setLoading] = useState(false);

  const { chainId, account, activate, active, library } = useWeb3React();
  
  const getListedItems = async () => {
    // get the contract
    const contract = getContract(library, account);

    setLoading(true);
    const items = await contract.fetchItemsListed();
    const prx = items[1]['price'];
    const tokenId = items[1]['tokenId'].toString();
    const tokenURI = items[1]['tokenURI'].toString();
    const price = ethers.utils.formatEther(prx);
    const metadataJson = `https://gateway.pinata.cloud/ipfs/${tokenURI}`;
    const response = await axios.get(metadataJson);

    const image = `https://ipfs.io/ipfs/${response.data.image}`;

    cardItems[0].img = image;
    cardItems[0].price = price;
    cardItems[0].title = response.data.name;
    cardItems[0].avatar_name1 = "Burak"
    
    setCardItems(cardItems);
    setLoading(false);
    debugger;
    console.log(items);
  };

  useEffect(() => {
    console.log(chainId, account, active, library);
    getListedItems();
  }, [chainId, account, active]);

  return (
    <div>
      <div className="row mb-30_reset">
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
    </div>
  );
}

export default CardMarketplace;
