import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola, me llamo</h2>
          <h1 className="i-name">Sergio Madrigal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            Soy un desarrollador que disfruta aprendiendo de las nuevas tecnologias y aplica lo aprendido en decenas de ideas diferentes. Apasionado de la ciencia ficción y de las matemáticas.
          </p>
        </div> 
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
