import React from 'react';
import useBreakpoints from '../hooks/_customHooks';

const MarketplaceDetails = () => {

  const img = useBreakpoints() === 'lg' ? 'img' : 'solid' || 'img';

  return (
    <div className={`d-flex w-full py-20 pointing justify-content-start align-item-center ${img}`}>
      <div className='container pt-20 flex-column text-white gap-5'>
        <div>

          <h2 className={`${'txt_hero_lg'}  text-white`}>Finally a marketplace that backs NFT&apos;S with real world value. Now artists can distribute royalties, tickets & <br /> merchandise independently</h2>
        </div>
        <div>
          <p className="txt_lg text-white">Fans get to invest in their favourite music and artists become entrepreneurs receiving payments directly without the need for middlemen & centralised control</p>
        </div>

      </div>

    </div>
  );
};

export default MarketplaceDetails;
