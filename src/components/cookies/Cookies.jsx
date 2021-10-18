import { useState } from "react";
import { useCookies } from "react-cookie";
import "./cookies.css";

const Cookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['policy']);
    const [showCookies, setShowCookies] = useState(false || cookies.policy);
    

    // Funcion que activa que desaparezca el mensaje de las cookies.
    const handleClick = (e) =>{
        if(e.target.name==="accept"){
            setShowCookies(true);
            setCookie('policy', true);
        }

    }

  return (
    <div className={`ck ${showCookies ? "ck-disappear" : ""}`}>
      <div className="ck-wrapper">
        <div className="ck-message">
          <h1 className="ck-title">Uso de cookies</h1>
          <p className="ck-text">
            Utilizamos cookies propias y de terceros para mejorar nuestros
            servicios y mostrarle publicidad relacionada con sus preferencias
            mediante el análisis de sus hábitos de navegación. Puede obtener más
            información en nuestra <a href="#">Política de Cookies</a>
          </p>
        </div>
        <div className="ck-buttons">
          <button className='ck-accept'  name="accept" onClick={handleClick}>Aceptar</button>
          <button className="ck-decline" name="decline" onClick={handleClick}>Declinar</button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
