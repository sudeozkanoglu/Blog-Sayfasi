import "./FooterStyles.css";
import {FaHome , FaPhone , FaMailBulk , FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                        size={20} 
                        style={{color: "#fff", 
                                marginRight: "2rem"}}
                    /> 
                    <div>
                        <p>
                            Atatürk Mahallesi Erol Fırtına Caddesi 
                            Hilal Sitesi A2 Blok Daire 2 
                        </p>
                        <p>
                            Tire/İzmir
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone 
                        size={20} 
                        style={{color: "#fff", 
                                marginRight: "2rem"}}
                    /> 
                        0542 402 50 83
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk 
                        size={20} 
                        style={{color: "#fff", 
                                marginRight: "2rem"}}
                    /> 
                        atakanbayrak461@hotmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>Benim Hakkımda</h4>
                <p>Ben Atakan Bayrak. Gazi Üniversitesi Bilgisayar 
                    Mühendisliği son sınıf öğrencisiyim.
                </p>
                <div className="social">
                <FaGithub 
                    size={30} 
                    style={{color: "#fff", 
                            marginRight: "1rem"}}
                /> 
                <FaLinkedin 
                    size={30} 
                    style={{color: "#fff", 
                            marginRight: "1rem"}}
                /> 
                <FaInstagram 
                    size={30} 
                    style={{color: "#fff", 
                            marginRight: "1rem"}}
                /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer