import { useState } from 'react';
import './App.css';
import beechBrookeLogo from './assets/beech_brook.jpeg';
import { IoCartOutline } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <nav>
        <img src={beechBrookeLogo} height="40px" />
        <div className="right-nav">
          <IoCartOutline size="1.5rem" />
          <FaPhoneAlt size="1.5rem" />
          <RxHamburgerMenu size="1.5rem" />
        </div>
      </nav>
      <main>
        <h2>
          Every child deserves the chance to thrive. And Beech Brook is here to
          help.
        </h2>
        <p>
          Beech Brook works with children and families to provide
          trauma-informed mental health services, parent education,
          comprehensive sex education, and foster care to help all children and
          families thrive.
        </p>
      </main>
      <div className="image-wrapper">
        <div className="image-1">
          <div className="image-inner-wrapper">
            <div>
              <h3>How We Help</h3>
              <IoIosArrowForward size="1.4rem" id="iosArrow" />
            </div>
          </div>
        </div>
        <div className="image-2">
          <div className="image-inner-wrapper">
            <div>
              <h3>How We Help</h3>
              <IoIosArrowForward size="1.4rem" id="iosArrow" />
            </div>
          </div>
        </div>
        <div className="image-3">
          <div className="image-inner-wrapper">
            <div>
              <h3>How We Help</h3>
              <IoIosArrowForward size="1.4rem" id="iosArrow" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
