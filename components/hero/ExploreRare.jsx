import Image from "next/image";
import Link from "next/link";

const wallets = [
    {
        title: "Collectables",
        p: "Original masters, avatars, merchandise & <br/> beats are available as NFT'S",
        icon: '/img/icons/collectables.png'
    },
    {
        title: "Royalties",
        p: "Musicians and fans can collabrate <br/> on new music and share streaming royalties",
        icon: '/img/icons/royalties.png'
    },
    {
        title: "NFTickets",
        p: "Purchase NFT tickets and watch your favourite <br/> artists live in concert or in the Metaverse",
        icon: '/img/icons/nfttickets.png'
    },
    {
        title: "Listen",
        p: "Stream music on the blockchain. Upload & <br/> earn RGV tokens. Tip your favourite artists",
        icon: '/img/icons/listen.png'
    },
];

const ExploreRare = () => {

    const walletCard = (val) => {
        return (
            <div className="d-flex justify-content-center">
                <button
                    className="box in__explore space-y-10 "
                >
                    <div className="logo">
                        <Image
                            src={val.icon}
                            alt="logo_community"
                            width={550}
                            height={400}
                        />
                    </div>
                    <h5 className="text-white txt_lg">{val.title}</h5>
                    <p className="text-white txt_lg" dangerouslySetInnerHTML={{ __html: val.p }}></p>
                </button>
            </div>
        );
    };

    return (
        <div className="explore-rare">
            <div className="container">
                <div className="section__head">
                    <div
                        className="d-flex justify-content-between sm-column
                            align-items-center mb-20">
                        <h1></h1>
                        <Link href="collections">
                            <button className="btn btn-primary mt-20"><span className='p-40'>View All</span></button>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h1 className="txt_hero_lg text-white">Explore The Rare Groove Marketplace</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wallets">
                            <div className="row">
                                {wallets.map((val, i) => (
                                    <div className="col-md-6" key={i}>
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

export default ExploreRare;
