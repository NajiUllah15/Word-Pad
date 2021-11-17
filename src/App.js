import './App.css';

import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';

import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#212127';
      document.querySelector('textarea').style.backgroundColor = '#212127';
      document.querySelector('textarea').style.color = '#fff';
      document.body.style.color = '#fff';
      showAlert('Dark mode enabled', 'primary');
    } else {
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212127';
      document.querySelector('textarea').style.backgroundColor = '#fff';
      document.querySelector('textarea').style.color = '#212127';
      showAlert('Dark mode disabled', 'warning');
    }
  };

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const customTheme = {
    sepia: { backgroundColor: '#FFEDD6  ' },
    dark: { backgroundColor: '#1d1c1c' },
    amoled: { backgroundColor: '#09060F' },
    purple: { backgroundColor: '#180C1F' },
    oceanic: { backgroundColor: '#141122' },
  };

  let TextColor = '#FFF9F9';

  const changeSepia = () => {
    let sepiaColor = customTheme.sepia.backgroundColor;
    document.body.style.backgroundColor = sepiaColor;
    document.body.style.color = 'black';
    document.querySelector('textarea').style.backgroundColor =
      customTheme.sepia.backgroundColor;
    setmode(customTheme.sepia.backgroundColor);
  };
  const changeDark = () => {
    let darkColor = customTheme.dark.backgroundColor;
    document.body.style.color = TextColor;
    document.body.style.backgroundColor = TextColor;
    document.body.style.backgroundColor = darkColor;

    document.querySelector('textarea').style.backgroundColor =
      customTheme.dark.backgroundColor;
    document.querySelector('textarea').style.color = TextColor;
    setmode(customTheme.dark.backgroundColor);
  };
  const changeAmoled = () => {
    let amoledColor = customTheme.amoled.backgroundColor;
    document.body.style.color = TextColor;
    document.body.style.backgroundColor = TextColor;
    document.body.style.backgroundColor = amoledColor;
    document.querySelector('textarea').style.backgroundColor =
      customTheme.amoled.backgroundColor;
    document.querySelector('textarea').style.color = TextColor;
    setmode(customTheme.amoled.backgroundColor);
  };
  const changePurple = () => {
    let purpleColor = customTheme.purple.backgroundColor;
    document.body.style.color = TextColor;
    document.body.style.backgroundColor = TextColor;
    document.body.style.backgroundColor = purpleColor;

    document.querySelector('textarea').style.backgroundColor =
      customTheme.purple.backgroundColor;
    document.querySelector('textarea').style.color = TextColor;
    setmode(customTheme.purple.backgroundColor);
  };

  const changeOceanic = () => {
    let oceanicColor = customTheme.oceanic.backgroundColor;
    document.body.style.color = TextColor;
    document.body.style.backgroundColor = TextColor;
    document.body.style.backgroundColor = oceanicColor;

    document.querySelector('textarea').style.backgroundColor =
      customTheme.oceanic.backgroundColor;
    document.querySelector('textarea').style.color = TextColor;
    setmode(customTheme.oceanic.backgroundColor);
  };

  return (
    <>
      <Router>
        <div className='container'>
          <Navbar
            theme={mode}
            themeToggle={toggleMode}
            showAlert={showAlert}
            customTheme={customTheme}
            changeSepia={changeSepia}
            changeDark={changeDark}
            changeAmoled={changeAmoled}
            changePurple={changePurple}
            changeOceanic={changeOceanic}
          />
          <Alert alertText={alert} />
        </div>
        <Routes>
          <Route
            exact
            path='/about'
            element={<About title='Word-Pad - About' />}
          ></Route>
          <Route exact path='/' element={<Form showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// export default Switch();
