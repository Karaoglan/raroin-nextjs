import React, { useEffect, useLayoutEffect, useState } from 'react';

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
    <div className={`py-20 pointing ${img}`}>


      <div className='d-flex flex-column container w-2 space-y-30 text-white feat'>
        {FeaturesContent.map((feature, i) => {
          return (
            <div key={i}>

              <div className='mb-10 d-flex space-x-10'>
                <div style={{ fontSize: '32px', color: '#f40ce5' }}>
                  <i className={`${feature.icon}`}></i>
                </div>
                <h2 style={{ color: 'rgb(244, 12, 229)' }}><i>{feature.title}</i></h2>
              </div>
              <div className='' dangerouslySetInnerHTML={{ __html: feature.desc }}></div>
            </div>

          )
        })}
      </div>

    </div>
  );
};

export default Features;
