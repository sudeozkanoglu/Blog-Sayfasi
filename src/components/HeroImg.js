import "./HeroImgStyles.css";
import IntroImg from "../assets/intro.jpg";
import React from 'react'
import {Link} from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Merhaba, Ben Atakan Bayrak</p>
            <h1>Backend Developer</h1>
            <div>
                <Link to="/project" className="btn">Proje</Link>
                <Link to="/contact" className="btn btn-light">İletişim</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg