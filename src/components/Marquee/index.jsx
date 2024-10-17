import React from 'react';
import Marquee from 'react-fast-marquee';
import { companies } from '../../data/companies';
import './styles.css';

function Companies() {
  return (
    <div className="companies-container">
        <Marquee speed={35} gradient={false} direction="rigth">
        {companies.map((companie, index) => (
            <div key={index} className="company-item">
            <img src={companie.logo} alt={`Companie ${index}`} className="company-logo" />
            </div>
        ))}
        </Marquee>
    </div>
  )
}

export default Companies