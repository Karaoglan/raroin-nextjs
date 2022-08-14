import Image from "next/image";

const wallets = [
    {
        title: "Set up your wallet",
        p: "Once you've set up your wallet of choice, add PulseChain network & connect it to Rare Groove by clicking the wallet icon in the top right corner.",
        icon: '/img/icons/t1.webp'
    },
    {
        title: "Create your collection",
        p: "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
        icon: '/img/icons/t2.webp'
    },
    {
        title: "Add your NFTs",
        p: "Upload your work (image, music, tickets or 3D art), add a title and description, and customize your NFTs with properties and unlockable content.",
        icon: '/img/icons/t3.webp'
    },
    {
        title: "List them for sale",
        p: "Choose between auctions, fixed-price listings, You choose how you want to sell your NFTs, and we help you sell them!",
        icon: '/img/icons/t4.webp'
    },
];

const Buysell = () => {

    const walletCard = (val) => {
        return (
            <button
                className="box in__wallet__home space-y-10"
            >
                <div className="logo">
                    <Image
                        src={val.icon}
                        alt="logo_community"
                        width={100}
                        height={100}
                    />
                </div>
                <h5 className="text-center txt_lg">{val.title}</h5>
                <p className="text-center txt_lg">{val.p}</p>
            </button>
        );
    };

    return (
        <div className="effect">
            <div className="container">
                <div className="section__head">
                    <div
                        className="d-flex justify-content-between sm-column
                            align-items-center mb-20">
                        <h2 className="section__title txt_hero_lg mt-20"> Create & Sell</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="wallets">
                            <div className="row">
                                {wallets.map((val, i) => (
                                    <div className="col-md-6 col-lg-3" key={i}>
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

export default Buysell;
