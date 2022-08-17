import React, { useEffect, useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const MarketplaceDetails = () => {
  const [width, height] = useWindowSize();
  const [img, setImg] = useState('img')
  const [fontSize, setFontSize] = useState('txt_hero_md')

  useEffect(() => {
    if (width < 900) {
      setImg('solid');
      setFontSize('txt_hero_md');
    } else {
      setImg('img')
      setFontSize('txt_hero_lg')
    }
  }, [width])

  return (
    <div className={`d-flex w-full market-place-details pointing justify-content-start align-item-center ${img}`}>
      <div>
        <div className='container my-100 flex-column p-40 text-white'>
          <div>
            <div className='mb-30'>
              <h2 className={`${fontSize} text-white`}>Finally a marketplace that backs NFT&apos;S with real world value. Now artists can distribute royalties, tickets & <br /> merchandise independently</h2>
            </div>
            <p className="txt_lg text-white">Fans get to invest in their favourite music and artists become entrepreneurs receiving payments directly without the need for middlemen & centralised control</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDetails;
