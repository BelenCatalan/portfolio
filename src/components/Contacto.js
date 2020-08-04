import React from 'react';
// import aboutme from '../images/iconsabout.jpg';
import '../stylesheets/App.scss';

function contact() {
  return (
    <div className="about__div">
      <h4 className="about__h4">Belen Catalán</h4>
      <p className="about__p">Hola, voy a contarte algunas cosas sobre mi.</p>
      <p className="about__p"> Sobre mi personalidad, me considero una persona muy curiosa, que le gusta mucho aprender cosas nuevas, sobre todo si con esos conocimientos puedo crear cosas por mi misma. Soy tenaz y comprometida, de fácil adaptabilidad y empatía, los nuevos retos me dan la vida. </p>

      {/* <img className="about__img" src={aboutme} alt="about me"></img> */}
    </div>
  );
}

export default contact;
