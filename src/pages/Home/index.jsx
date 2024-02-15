import { Header } from '../../components/Header';
import { MenuCards } from '../../components/MenuCards';
import { Footer } from '../../components/Footer';

const mock = [
  { id: 1, img: 'react.png', equal: false },
  { id: 2, img: 'react.png', equal: false },
  { id: 3, img: 'nest.png', equal: false },
  { id: 4, img: 'nest.png', equal: false },
  { id: 1, img: 'react.png', equal: false },
  { id: 2, img: 'react.png', equal: false },
  { id: 3, img: 'nest.png', equal: false },
  { id: 4, img: 'nest.png', equal: false },
  { id: 1, img: 'react.png', equal: false },
  { id: 2, img: 'react.png', equal: false },
  { id: 3, img: 'nest.png', equal: false },
  { id: 4, img: 'nest.png', equal: false },
  { id: 1, img: 'react.png', equal: false },
  { id: 2, img: 'react.png', equal: false },
  { id: 3, img: 'nest.png', equal: false },
  { id: 4, img: 'nest.png', equal: false },
];

export const Home = () => {
  return (
    <>
      <Header />
      <MenuCards allCards={mock} />
      <Footer />
    </>
  );
};
