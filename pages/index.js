import Head from 'next/head';
import ApplyDrop from '../components/hero/ApplyDrop';
import Buysell from '../components/hero/Buysell';
import Call2action from '../components/hero/Call2Action';
import ExploreRare from '../components/hero/ExploreRare';
import Faqs from '../components/hero/Faqs';
import Features from '../components/hero/Features';
import Hero1 from '../components/hero/Hero1';
import Hero2 from '../components/hero/Hero2';
import LatestDrops from '../components/hero/LatestDrops';
import LogoVideoBottom from '../components/hero/LogoVideoBottom';
import MarketplaceDetails from '../components/hero/MarketplaceDetails';
import Royalties from '../components/hero/Royalties';
import UserFriendlyFeatures from '../components/hero/UserFriendly';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Hero1 />
        <Call2action />
        <Hero2 />
        <LatestDrops />
        <Buysell />
        <ExploreRare />
        <Royalties />
        <ApplyDrop />
        <Features />
        <UserFriendlyFeatures />
        <MarketplaceDetails />
        <Faqs />
        <LogoVideoBottom />
      </div>
    </div>
  )
}