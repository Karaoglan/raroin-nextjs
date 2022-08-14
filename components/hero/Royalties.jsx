import Image from "next/image";

const wallets = [
    {
        title: "Musician sells",
        p: "NFT's that represent a percentage of royalties from a song or album are sold to fans",
        icon: '/img/bg/musician.png'
    },
    {
        title: "Fan buys",
        p: "Fans buy NFT which gives them ownership in the project and access to VIP features",
        icon: '/img/bg/funbuys.png'
    },
    {
        title: "Airdrop",
        p: "When royalties are generated tokens are airdropped to NFT holders",
        icon: '/img/bg/airdrop.png'
    },
];

const Royalties = () => {

    const walletCard = (val) => {
        return (
            <button
                className="box in__wallet space-y-10"
            >
                <div className="logo">
                    <Image
                        src={val.icon}
                        alt="logo_community"
                        width={350}
                        height={400}
                    />
                </div>
                <h5 className="text-center txt_lg">{val.title}</h5>
                <p className="text-center txt_lg" >{val.p}</p>
            </button>
        );
    };

    return (
        <div className="royalties__home">
            <div className="container">
                <div className="section__head">
                    <div
                        className="d-flex row text-center mb-20 space-y-30">
                        <h1 className="txt_hero_lg mt-40">Royalties</h1>
                        <h2 className="txt_hero_md">This is how musicians and fans can collaborate and share success</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="">
                            <div className="row justify-content-center ">
                                {wallets.map((val, i) => (
                                    <div className="col-sm-6 col-md-4" key={i}>
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

export default Royalties;
