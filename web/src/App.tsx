import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/CreatAdBanner';
import { CreatAdModal } from './components/CreatAdModal';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  };
};



function App() {
  const [option, setOption] = useState({})
  const [games, setGames] = useState<Game[]>([]);
  const [ref] = useKeenSlider<HTMLDivElement>(option)

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(data =>{
      setGames(data);
      setOption({
        slides: {
          perView: 5,
          spacing: 20
        },
        breakpoints:{
          "(max-width: 1024px)": {
            slides: { 
              perView: 4,
              spacing: 20
            },
          },
          "(max-width: 768px)": {
            slides: { 
              perView: 3,
              spacing: 20
            },
          },
          "(max-width: 540px)": {
            slides: { 
              perView: 1,
            },
          },
        },
      });
    });
  },[])

  return(
    <div className='max-w-[1344] mx-auto flex flex-col items-center my-20 px-10'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div ref={ref} className='keen-slider grid grid-cols-6  mt-16'>
        {games.map(game =>{
          return(
            <div key={game.id} className='keen-slider__slide' >
              <GameBanner
                bannerUrl={game.bannerUrl} 
                title={game.title} 
                adsCount={game._count.ads}
              />
            </div>
          )
        })}
      </div>

    <Dialog.Root>
      <CreatAdBanner/>
      <CreatAdModal/>
    </Dialog.Root>

    </div>
  )
}

export default App
