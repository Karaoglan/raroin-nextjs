import Head from 'next/head';
import HeroMarketplace from '../../components/hero/HeroMarketplace';
import MenuCategoriesMarket from '../../components/MenuCategoriesMarket';

const Marketplace = () => {
    return (
        <>
            <Head>
                <title>Marketplace</title>
            </Head>
            <div>
                <HeroMarketplace />
                <div className="d-flex justify-content-center">
                    <MenuCategoriesMarket />
                </div>
            </div>
        </>
    );
};

export default Marketplace;
