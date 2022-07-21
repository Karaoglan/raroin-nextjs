import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LatestDrops from '../components/cards/LatestDrops';
import TopArtist from "../components/creators/TopArtist";
import Explore from '../components/hero/Explore';
import HomePreview from '../components/hero/HomePreview';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rare Groove - NFT Music Marketplace</title>
        <meta name="description" content="Rare Groove NFT Music Marketplace - real world value, bringing fans & musicians together without middleman." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePreview />
        <LatestDrops />
        <TopArtist />
        <Explore />
      </div>


      <div className='row invest-in'>
        <div className=" col-lg-6 align-items-center justify-content-center p-100">
          <span>
            <h2>
              LEADING THE WAY FOR A
            </h2>
            <h2>DECENTRALISED MUSIC </h2> <span>
              <h2>INDUSTRY  <Image src={`/img/icons/heartbeat.png`}
                className="heartbeat"
                width={50}
                height={50}
                alt="heart_beat" /></h2>
            </span>
            <div className='p-30'>
              <Link href="marketplace">
                <a className="btn btn-white">Buy NFT</a>
              </Link>
            </div>
          </span>
        </div>
        <div className='col-lg-6'>
          <img src={`img/items/item_1.png`} alt="nftimage" />
        </div>
      </div>
    </div>
  )
}