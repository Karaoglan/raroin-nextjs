import Image from 'next/image';
import Link from 'next/link';

const HomePreview = () => {
  return (
    <>
      <div className="hero__index">
        <div className="container">
          <div className="row mb-90 mt-60 ml-10">
            <div className="col-lg-6">
              <div className="hero__left space-y-20">
                <h1 className="hero__title">
                  Built For Musicians,
                  Fans & Investors
                </h1>
                <p className="hero__text txt">
                  Rare Groove is a revolutionary NFT music marketplace that backs NFT&apos;S with real world value.
                  We bring fans & musicians together without middleman or centeralised control.
                </p>
                <div
                  className="sm:space-x-0 space-x-20 d-flex flex-column flex-md-row
                  sm:space-y-20">
                  <Link href="/explore">
                    <a className="btn btn-white">
                      Explore
                    </a>
                  </Link>
                  <Link href="/upload">
                    <a className="btn btn-white">
                      Create
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="leading-home align-items-center justify-content-center p-100">
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
        </span>
      </div>
    </>
  );
};

export default HomePreview;
