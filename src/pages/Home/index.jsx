import { Header } from '../../components/Header';
import { MenuCards } from '../../components/MenuCards';
import { Footer } from '../../components/Footer';
import { CheckAllCorrect } from '../../utils/functionsCard/checkAllCorrect/index';

export const Home = () => {
  return (
    <>
      <CheckAllCorrect />
      <Header />
      <MenuCards />
      <Footer />
    </>
  );
};
