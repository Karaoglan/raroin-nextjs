import Image from "next/image";

const wallets = [
    {
        title: "Bulk Upload",
        p: "Sellers can upload collections of 10,000+ NFTs all at once. Simply drag and drop and watch your NFTs go live",
        icon: '/img/bg/logo-trs.png'
    },
    {
        title: "No Gas",
        p: "Buyers of NFT's will pay almost zero gas fees if you mint NFTs on PulseChain",
        icon: '/img/bg/logo-trs.png'
    },
    {
        title: "Multi-Chain",
        p: "The default blockchain we use is PulseChain which makes it faster and cheaper to transact on. You can also switch to Ethereum",
        icon: '/img/bg/logo-trs.png'
    },
];

const UserFriendlyFeatures = () => {

    const walletCard = (val) => {
        return (
            <button
                className="box in__wallet space-y-10"
            >
                <div className="d-flex flex-column space-y-10 p-30" style={{ height: '370px', backgroundColor: '#000' }}>

                <div className="logo">
                    <Image
                        src={val.icon}
                        alt="logo_community"
                        width={200}
                        height={100}
                    />
                </div>
                <h2 className="text-white text-center">{val.title}</h2>
                <p className="text-white text-center " >{val.p}</p>
                </div>

            </button>
        );
    };

    return (
        <div className="royalties__home">
            <div className="container">
                <div className="section__head">
                    <div
                        className="d-flex row text-center mb-20 space-y-30">
                        <h1 className="txt_hero_lg mt-40">User Friendly Features</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="">
                            <div className="row justify-content-center ">
                                {wallets.map((val, i) => (
                                    <div className="col-sm-6 col-lg-4" key={i}>
                                        {walletCard(val)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFriendlyFeatures;
