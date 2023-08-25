import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from 'react';

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- BASIC -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Gün</p>
                <p>- 3 Sayfa</p>
                <p>- Öne Çıkan</p>
                <p>- Responsive Dizayn</p>
                <Link to="/contact" className="btn">
                    ŞİMDİ AL
                </Link>
            </div>
            <div className="card">
                <h3>- PREMIUM -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2 Gün</p>
                <p>- 5 Sayfa</p>
                <p>- Öne Çıkan</p>
                <p>- Responsive Dizayn</p>
                <Link to="/contact" className="btn">
                    ŞİMDİ AL
                </Link>
            </div>
            <div className="card">
                <h3>- BUSINESS -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5 Gün</p>
                <p>- 8 Sayfa</p>
                <p>- Öne Çıkan</p>
                <p>- Responsive Dizayn</p>
                <Link to="/contact" className="btn">
                    ŞİMDİ AL
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard