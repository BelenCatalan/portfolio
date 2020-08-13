import React from 'react';
// import aboutme from '../images/iconsabout.jpg';
import series from '../images/seriecortadados.jpeg';
import code from '../images/code-fiction.jpeg';
import cardsjs from '../images/cardsjs.jpeg';
import cardsreact from '../images/cardsreact.jpeg';
import randm from '../images/rickandmorty.jpeg';
import '../stylesheets/App.scss';
import Project from './Project';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';

function Portfolio() {
  const iconQuienes = ['feo', 'casa'];
  return (
    <div className=" portfolio__div portfolio__sectiongrid ">
      {/* <h4 className="about__h4">Belen Catalán</h4> */}
      <ul className="portfolio__wrapper project__ul">
        <Project text="Quiénes somos" alt="team" image={code} icons={iconQuienes} description="Quiénes somos: equipo de desarrollo" />
        <Project text="Crea tu tarjeta" alt="cardsjs" image={cardsjs} description="Generador de tarjetas digital" />
        <Project text="Buscador de series" alt="cardsjs" image={series} description="Encuentra tu serie, y añádela a favoritos" />
        <Project text="Crea tu tarjeta" alt="cardsjs" image={cardsreact} description="Generador de tarjetas digital, código heredado" />
        <Project text="Rick and Morty" alt="cardsjs" image={randm} description="Buscador de personajes de la serie" />
      </ul>

      {/* <img className="about__img" src={aboutme} alt="about me"></img> */}
    </div>
  );
}

export default Portfolio;
