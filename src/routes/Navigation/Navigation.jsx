import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import '../Navigation/navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' link to='/'>
          <Logo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to=''>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
