import React from 'react';

export const Confirmation = ({ clickConfirmation, url }) => {
  return (
    <div>
      <button onClick={clickConfirmation} className="button">Show Billboard</button>
      <p id="link">{url}</p>
    </div>
  )
}
