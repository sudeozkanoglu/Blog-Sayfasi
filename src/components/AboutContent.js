import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import img1 from "../assets/photo.jpeg";
import img2 from "../assets/markus-spiske-MgtHZ4zlC1U-unsplash.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Ben Kimim ?</h1>
            <p>
                Ben Atakan Bayrak. Gazi Üniversitesi
                Bilgisayar Mühendisliği son sınıf öğrencisiyim.
                2001 yılında Muğla'da dünyaya geldim ve şu an İzmir'de
                ikamet etmekteyim. 2019 yılında Tire Belgin Atilla Çallıoğlu
                Fen Lisesi'nden mezun oldum. 2021 yılında ise Erasmus
                programına katılarak Slovenya'daki Maribor University'de
                bir dönem eğitim aldım. Şu an Türksat'ta stajyer olarak
                çalışmaktayım.
            </p>
            <Link to="/contact">
                <button className="btn">İletişim</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent