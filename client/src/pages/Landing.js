import main from '../assets/images/alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby godard biodiesel knausgaard swag 3 wolf moon, ugh marfa la
            croix lomo lo-fi distillery kogi. Artisan drinking vinegar snackwave
            pickled cloud bread. Pork belly letterpress polaroid irony blue
            bottle. Bespoke blog disrupt kogi, chia bitters lomo schlitz seitan
            cornhole scenester drinking vinegar 90's vaporware selvage
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
