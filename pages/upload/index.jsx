//import Header from '../../../components/header/Header';
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Head from "next/head";
import Link from 'next/link';
import { useEffect } from "react";
import { getContract } from "../../helpers/contract";

const Upload = () => {

  const { chainId, account, activate, active, library } = useWeb3React();

  useEffect(() => {
    console.log(chainId, account, active, library);
  }, [chainId, account, active]);


  const createItem = async () => {
    // get the contract
    const contract = getContract(library, account);


    const transactionNftCreate = await contract.createToken("SOME URI", ethers.utils.parseUnits("1", "ether"), { value: ethers.utils.parseUnits("0.025", "ether") });
    console.log('Mining....', transactionNftCreate.hash)
    const transactionNftCreateReceipt = await transactionNftCreate.wait();
    if (transactionNftCreateReceipt.status !== 1) {
      alert('create token error message');
      return;
    }
    /*
    axios
      .post('/api/upload', {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        console.log(response);

      
      });*/
  };

  return (
    <>
      <Head>
        <title>Upload Item</title>
      </Head>
      <div>
        <div className="hero__upload">
          <div className="container">
            <div className="space-y-20 space-x-10">
              <span>
                <a
                  href="/"
                  className="btn btn-white btn-sm
                    switch">
                  Back To Home
                </a>
              </span>
              <span>
                <a
                  href="upload-type"
                  className="btn btn-white btn-sm
                    switch">
                  Switch to Multiple
                </a>
              </span>
              <h1 className="title">Create single collectible</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box in__upload mb-120">
            <div className="row">
              <div className="col-lg-6">
                <div className="left__part space-y-40 md:mb-20 upload_file">
                  <div className="space-y-20">
                    <img
                      className="icon"
                      src={`/img/icons/upload.svg`}
                      alt="upload"
                    />
                    <h5>Drag and drop your file</h5>
                    <p className="color_text">
                      PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                    </p>
                  </div>
                  <div className="space-y-20">
                    <p className="color_text">or choose a file</p>
                    <Link href="#" className="btn btn-white">
                      Browse files
                    </Link>
                    <input type="file" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group space-y-10">
                  <div className="space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Title</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e. g. `raroin design art`"
                      />
                    </div>
                    <div className="space-y-10">
                      <span>External Link</span>
                      <span className="color_text">(optional) </span>
                      <div className="">
                        <p><small>Firm will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</small></p>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://yourwebsite.io/item/123"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">
                        Description
                        <span className="color_text">(optional) </span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Provide a detailed description of your item."
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="variationInput">Choose collection
                        <span className="color_text">(optional) </span>
                      </span>
                      <div className="d-flex flex-column flex-md-row">
                        <div className="choose_collection bg_black  ">
                          <img
                            src={`/img/icons/raroin_icon.svg`}
                            alt="raroin_icon"
                          />

                          <span className="color_white ml-10 mr-10">

                          </span>
                          <select
                            className="form-select custom-select"
                            aria-label="Default select example">
                            <option></option>
                            <option>Raroin Collection</option>
                            <option>Collection2</option>
                            <option>Collection3</option>
                            <option>Collection4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="variationInput">Price</span>
                      <select
                        className="form-select custom-select"
                        aria-label="Default select example">
                        <option> 00.00 ETH</option>
                        <option>01.00 ETH</option>
                        <option>02.00 ETH</option>
                        <option>10.00 ETH</option>
                        <option>20.00 ETH</option>
                      </select>
                    </div>

                  </div>
                </div>
                <p className="color_black">
                  <span className="color_text text-bold"> Service fee : </span>
                  2.5%
                </p>
                <p className="color_black">
                  <span className="color_text text-bold">You will receive :</span>
                  22.425 ETH $41,637.78
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed_row bottom-0 left-0 right-0">
          <div className="container">
            <div className="row content justify-content-between mb-20_reset">
              <div className="col-md-auto col-12 mb-20">
                <div className="space-x-10">
                  <Link
                    href="/upload-type"
                    className="btn btn-white
						others_btn">
                    Cancel
                  </Link>
                  <Link href="#" className="btn btn-dark others_btn">
                    Preview
                  </Link>
                </div>
              </div>
              <div className="col-md-auto col-12 mb-20">
                <button
                  type="button"
                  className='btn btn-grad btn_create'
                  aria-label="create"
                  onClick={createItem}>
                  Create Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Upload;
