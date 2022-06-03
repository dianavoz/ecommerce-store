import Categories from '../components/Categories/Categories';
import hats from '../assets/hats.jpg';
import sneakers from '../assets/sneakers.jpg';
import women from '../assets/woman-shopping.jpg';
import men from '../assets/men-shopping.jpg';
import jakets from '../assets/jakets.jpg';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: hats,
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: jakets,
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: sneakers,
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: women,
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: men,
    },
  ];

  return <Categories categories={categories} />;
};

export default Home;
