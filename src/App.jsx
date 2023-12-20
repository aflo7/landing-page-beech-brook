import { useState } from 'react';
import './App.css';
import { IoCartOutline } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowForward } from 'react-icons/io';
import ThePanel from './components/ThePanel';
import { addUser } from './functions/write';

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const result = addUser(email, firstName, lastName);
    console.log(result)
  }
  return (
    <div className="wrapper">
      <nav
        style={{
          backgroundColor: showPanel ? 'rgb(13,18,35)' : 'rgb(10, 108, 163)'
        }}
      >
        <img
          src="https://www.beechbrook.org/images/logo-no-tag.svg"
          height="40px"
        />
        <div className="right-nav">
          <IoCartOutline size="1.5rem" />
          <FaPhoneAlt size="1.2rem" />
          <RxHamburgerMenu
            size="1.5rem"
            onClick={() => setShowPanel((prev) => !prev)}
            id="rxHamburgerMenu"
          />
        </div>
      </nav>

      {showPanel ? (
        <div
          style={{ backgroundColor: 'rgb(13,18,35)', paddingBottom: '20px' }}
        >
          <ThePanel />
        </div>
      ) : (
        <>
          <main>
            <h2>
              Every child deserves the chance to thrive. And Beech Brook is here
              to help.
            </h2>
            <p>
              Beech Brook works with children and families to provide
              trauma-informed mental health services, parent education,
              comprehensive sex education, and foster care to help all children
              and families thrive.
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
          <form className="sign-up-wrapper" onSubmit={handleSubmit}>
            <div className="sign-up-text">Sign Up</div>
            <div>Never miss out on the latest from Beech Brook.</div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="email" style={{ textTransform: 'uppercase' }}>
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
              >
                <label
                  htmlFor="firstName"
                  style={{ textTransform: 'uppercase' }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
              >
                <label
                  htmlFor="lastName"
                  style={{ textTransform: 'uppercase' }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <button type="text" id="signUpBtn">
              Sign Up
            </button>
            <div className="notNowText">Not now, maybe later.</div>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
