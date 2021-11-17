import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme} `}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Word-Pad
          </Link>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-link active'
                  aria-current='page'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div id='custom'>
            <span id='customTheme'>
              <span className='all-divs'>
                <div
                  className='individual-theme'
                  id='sepia'
                  style={props.customTheme.sepia}
                  onClick={props.changeSepia}
                >
                  <span id='theme-text'>Sepia</span>
                </div>
                <div
                  className='individual-theme'
                  id='dark'
                  style={props.customTheme.dark}
                  onClick={props.changeDark}
                >
                  <span id='theme-text'>Dark</span>
                </div>
                <div
                  className='individual-theme'
                  id='amoled'
                  style={props.customTheme.amoled}
                  onClick={props.changeAmoled}
                >
                  <span id='theme-text'>Amoled</span>
                </div>
                <div
                  className='individual-theme'
                  id='purple'
                  style={props.customTheme.purple}
                  onClick={props.changePurple}
                >
                  <span id='theme-text'>Purple</span>
                </div>
                <div
                  className='individual-theme'
                  id='oceanic'
                  style={props.customTheme.oceanic}
                  onClick={props.changeOceanic}
                >
                  <span id='theme-text'>Oceanic</span>
                </div>
              </span>
            </span>
          </div>

          <div className='form-check form-switch'>
            <input
              className=' main-input form-check-input'
              onClick={props.themeToggle}
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
            />
            <label
              className='form-check-label text-primary'
              htmlFor='flexSwitchCheckDefault'
            >
              {props.theme}-mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
