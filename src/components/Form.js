import React, { useState } from 'react';
export default function Form(props) {
  const [text, setText] = useState('');
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const toUpperCase = (e) => {
    setText(text.toUpperCase());
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied', 'success');
  };
  const delText = () => {
    setText('');
    props.showAlert('Deleted successfully', 'success');
  };

  return (
    <>
      <h3 className='container mx-auto my-4 overflow-hidden'>{props.main}</h3>
      <div className='container mt-2'>
        <div className='mb-3'>
          <label
            htmlFor='exampleFormControlTextarea1'
            className='form-label'
          ></label>
          <div className='container sidebar'>
            <textarea
              className='textarea'
              coloumn='6'
              rows='7'
              onChange={handleOnchange}
              value={text}
              placeholder='Enter Your text here'
            ></textarea>

            <div className='container mx-auto my-2 details'>
              <p className='charCount'>
                Total Characters : <span>{text.length}</span>
              </p>
              <p className='wordCount'>
                Words Count : <span>{text.split(' ').length - 1}.</span>
              </p>
              {/* <p className='Avg-Time-reading'> Avg-Time-reading: {text}</p> */}
            </div>
            <p className='preview container mx-auto'>
              <span>{text}</span>
            </p>
          </div>
        </div>
        <button className='btn btn-primary mx-2' onClick={toUpperCase}>
          To Uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={delText}>
          Delete text
        </button>
        <button className='btn btn-primary mx-2' onClick={copyText}>
          Copy text
        </button>
      </div>
    </>
  );
}

Form.defaultProps = {
  main: 'Enter text here',
};
