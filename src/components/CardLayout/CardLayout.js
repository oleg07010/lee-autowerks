import React from 'react';
import luxurycar from './luxurycar2.png';
import performancecar from './performance.png';
import classiccar from './classiccars2.png';
import './CardLayout.css'; // We'll create this CSS file

const CardLayout = () => {
  console.log('CardLayout rendering');
  
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <img className="card-image" src={luxurycar} alt="Mercedes Repair" />
          <div className="card-overlay">
            <h2 className="card-title">Maintenance</h2>
            <p>German car require on-time maintenance. We will perform all manifacturer recommended services.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <img className="card-image" src={performancecar} alt="Performance Car" />
          <div className="card-overlay">
            <h2 className="card-title">Sports Performance</h2>
            <p>If you're a fan of speed. We will upgrade your car for the track.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <img className="card-image" src={classiccar} alt="Classic German Cars" />
          <div className="card-overlay">
            <h2 className="card-title">Classic Cars</h2>
            <p>We will restore your beautiful classic to its original glory.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
