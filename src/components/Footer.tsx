import { useEffect, useState } from 'react';

import './Footer.scss';

function Footer() {
  const [currentTimeString, setCurrentTimeString] = useState(getCurrentTimeString);

  useEffect(() => {
    setInterval(() => setCurrentTimeString(getCurrentTimeString), 1000);
  });

  return (
    <div className="Footer px-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-start text-center">Current time</div>
          <div className="col-md-6 text-md-end text-center">{currentTimeString}</div>
        </div>
      </div>
    </div>
  );
}

function getCurrentTimeString(): string {
  return new Date().toLocaleTimeString();
}

export default Footer;
