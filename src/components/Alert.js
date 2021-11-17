import React from 'react';

export default function Alert(props) {
  return (
    props.alertText && (
      <>
        <div
          className={`alert alert-${props.alertText.type} alert-dismissible fade show `}
          role='alert'
        >
          {props.alertText.message}
        </div>
      </>
    )
  );
}
