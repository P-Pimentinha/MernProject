import Wrapper from '../assets/wrappers/SmallSidebar.js';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './logo.js';
import NavLinks from './NavLinks';

export const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar}></NavLinks>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
