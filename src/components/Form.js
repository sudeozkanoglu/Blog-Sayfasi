import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>ADIN</label>
            <input type="text"></input>
            <label>MAIL ADRESİN</label>
            <input type="email"></input>
            <label>KONU</label>
            <input type="text"></input>
            <label>MESAJIN</label>
            <textarea rows="6" placeholder="Mesajını buraya yazabilirsin..."/>
            <button className="btn">GÖNDER</button>
        </form>
    </div>
  )
}

export default Form;