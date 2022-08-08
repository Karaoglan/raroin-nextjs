import {
  Networks,
  NFTFetchConfiguration, useNFT
} from '@zoralabs/nft-hooks';
import Head from 'next/head';
import ApplyDrop from '../components/cards/UserFriendlyFeatures';
import CreateSell from '../components/cards/CreateSell';
import Faqs from '../components/cards/Faqs';
import LatestDrops from '../components/cards/LatestDrops';
import MarketImage from '../components/cards/MarketImage';
import ProjectDetails from '../components/cards/ProjectDetails';
import Royalties from '../components/cards/Royalties';
import Explore from '../components/hero/Explore';
import HomePreview from '../components/hero/HomePreview';
import RareExplore from '../components/hero/RareExplore';
import styles from '../styles/Home.module.css';
import UserFriendlyFeatures from '../components/cards/UserFriendlyFeatures';
/*

        <TopArtist />
        <div className='row invest-in'>
        <div className=' col-lg-6 align-items-center justify-content-center p-100'>
          <span>
            <h2>LEADING THE WAY FOR A</h2>
            <h2>DECENTRALISED MUSIC </h2>{' '}
            <span>
              <h2>
                INDUSTRY{' '}
                <Image
                  src={`/img/icons/heartbeat.png`}
                  className='heartbeat'
                  width={50}
                  height={50}
                  alt='heart_beat'
                />
              </h2>
            </span>
            <div className='p-30'>
              <Link href='marketplace'>
                <a className='btn btn-white'>Buy NFT</a>
              </Link>
            </div>
          </span>
        </div>
        <div className='col-lg-6'>
          <img src={`img/items/item_1.png`} alt='nftimage' />
        </div>
      </div>

*/
export default function Home() {
    const { data } = useNFT('0x997F20833affE82816267288d3DAf4fcE12f0B80', '1');
    console.log('!!!!!data', data);

    return (
        <div className={styles.container}>
            <Head>
                <title>Rare Groove - NFT Music Marketplace</title>
                <meta
                    name='description'
                    content='Rare Groove NFT Music Marketplace - real world value, bringing fans & musicians together without middleman.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NFTFetchConfiguration networkId={Networks.RINKEBY}>
                {data}
            </NFTFetchConfiguration>
            <div>
                <HomePreview />
                <LatestDrops />
                <CreateSell />
                <Explore />
                <Royalties />
                <ProjectDetails />
                <UserFriendlyFeatures />
                <MarketImage />
                <Faqs />
                <RareExplore />
            </div>
        </div>
    );
}

