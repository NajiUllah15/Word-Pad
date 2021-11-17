import React, { useState } from 'react';
export default function About() {
  const [theme, Settheme] = useState({
    color: 'inherit',
    backgroundColor: '#0E131F',
  });

  const [btnText, changebtnText] = useState('Disable dark mode');

  const toggletheme = () => {
    if (theme.color === '#CDCDCD') {
      Settheme({
        color: '#0E131F',
        backgroundColor: '#CDCDCD',
        transition: 'all .23s ',
        fontFamily: 'Quicksand',
      });

      changebtnText('Enable dark mode');
    } else {
      Settheme({
        color: '#CDCDCD',
        backgroundColor: '#0E131F',
        transition: 'all .23s ',
        fontFamily: 'Quicksand',
      });

      changebtnText('Disable dark mode');
    }
  };

  return (
    <>
      <div className='container mx-auto my-4 about'>
        <div className='card about' style={theme}>
          <div className='card-body' style={theme}>
            <h3 className='card-title overflow-hidden' style={theme}>
              About Us
            </h3>
            <p className='card-text' style={theme}>
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam laborum quia itaque tempora cupiditate libero sit soluta
              consectetur, consequuntur quasi assumenda fuga ad voluptates
              tenetur vero <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              rerum repudiandae? With supporting text below as a natural lead-in
              to additional content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam laborum quia itaque tempora cupiditate
              libero sit soluta consectetur, consequuntur quasi assumenda fuga
              ad voluptates tenetur vero <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              rerum repudiandae? With supporting text below as a natural lead-in
              to additional content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam laborum quia itaque tempora cupiditate
              libero sit soluta consectetur, consequuntur quasi assumenda fuga
              ad voluptates tenetur vero <br /> <br />
            </p>
            <button className='btn btn-dark' onClick={toggletheme}>
              {' '}
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
