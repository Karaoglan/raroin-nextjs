import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import 'remixicon/fonts/remixicon.css';
import '../assets/css/plugins/bootstrap.min.css';
import '../assets/scss/style.scss';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/globals.css';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Web3ReactProvider>
  );
}

export default MyApp;
