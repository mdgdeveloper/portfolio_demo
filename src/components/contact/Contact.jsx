import './contact.css'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../context';



const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // En esta linea deberiamos incluir la interaccion con enviar el formulario.
    }

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='c'>
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Hablemos de tu proyecto</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                +35 615 35 24 43
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                contacto@mdgmedia.es
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                Avenida Reis Catolics, 24 - 3. 46001. Valencia. Spain.
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Cual es tu historia?</b> Desde MDG Media podemos crear una solucion a medida de tus 
                            necesidades y encontrar el espacio que necesitas en la red para desarrollar tu negocio 
                            con garantia de exito. 
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}> 
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Nombre" name="user_name" />
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Titulo" name="user_titulo" />
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                            <textarea  style={{ backgroundColor: darkMode && "#333" }} placeholder="Mensaje "name="message" rows="5"></textarea>
                            <button>Enviar</button>
                            </form>
                    </div>
                </div>
            
        </div>
    )
}

export default Contact
