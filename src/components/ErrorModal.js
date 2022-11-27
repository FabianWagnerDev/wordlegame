import React from 'react';

export default function ErrorModal({ errorMsg }) {
    
  return (
    <div className='dark-overlay-error'>
        <div className='error-modal'>
            <p className='error-msg'>{ errorMsg }</p>
        </div>
    </div>
  )
}
