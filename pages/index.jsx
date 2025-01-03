import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Wotzshu
                </p>
            
                </div>
                <p className="text-white/50 text-md mt-3">
        <p>Selam! ben <strong>Kayra</strong>, istanbul'da yaşıyorum. Spotify'da şarkı yapımcısıyım.</p>
        <br></br>
        <h1><strong>EXPERIENCE</strong></h1>
        <br></br>
        <h1><strong>Sosyal Medya Hesaplarım</strong></h1>
        <ul>
            <li><a href="https://instagram.com/wotzshu/" target="_blank">* Wotzshu - Instagram</a></li>
            <li><a href="xxx" target="_blank">* Wotzshu - YouTube</a></li>
        </ul>
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="umutxyp" src={`https://ugc.production.linktr.ee/6RJk9s2pQZ2yAdcxw3Ir_TXX2dLlNmwM2OFdf?io=true&size=avatar-v3_0`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
              </div>
              
            </div>
            <br></br><br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">Spotify Sanatçısı / Müzik Yapımcısı</span>
          </div>
      </div>
    </>
  )
}
