import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FeaturesContent = [
  {
    icon: 'ri-eye-off-line',
    title: 'Removes Middlemen',
    desc: `Rare Groove creates a direct <br /> relationship between <br /> musician & fans`,
  },
  {
    icon: 'ri-palette-line',
    title: 'NFT',
    desc: `Royalty points, music & <br /> merchandise can be created <br /> and distributed as NFT&apos;s`,
  },
  {
    icon: 'ri-bluetooth-connect-line',
    title: 'Connect With Fans Directly',
    desc: `Fans can invest in artists <br /> and artists become <br /> entrepreneurs with no middleman`,
  },
  {
    icon: 'ri-mail-open-line',
    title: 'Transparency',
    desc: `All transactions are recorded <br /> on the blockchain`,
  }
];

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

const Features = () => {
  const [width, height] = useWindowSize();
  const [img, setImg] = useState('img')

  useEffect(() => {
    if (width < 900) {
      setImg('solid');
    } else {
      setImg('img')
    }
  }, [width])

  return (
    <div className={`d-flex w-full pointing justify-content-center align-item-center ${img}`}>
      <div className='fst'></div>
      <div className='scd'>
        <div className='flex-column space-y-30 md:m-40 l:m-80 xl:m-80 m-100 mr-60 text-white'>
          {FeaturesContent.map(feature => {
            return (
              <div>
                <div className='mb-10 d-flex space-x-10'>
                  <div style={{fontSize: '32px', color: '#f40ce5'}}>
                    <i class={`${feature.icon}`}></i>
                  </div>
                  <h2><i>{feature.title}</i></h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: feature.desc }}></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='trd'></div>
    </div>
  );
};

export default Features;
