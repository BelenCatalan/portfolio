import React from 'react';
// import aboutme from '../images/iconsabout.jpg';
import series from '../images/series.png';
import '../stylesheets/App.scss';
import Project from './Project';

function Portfolio() {
  return (
    <div className=" portfolio__sectiongrid ">
      {/* <h4 className="about__h4">Belen Catalán</h4> */}
      <ul className="portfolio__wrapper project__ul">
        <Project text="Buscador de Series" alt="micabeza" image={series} linkto="Ir al proyecto" description="Buscador de series, elige tus series favoritas" />
        <Project text="segundo" alt="micabeza" />
        <Project text="tercero" alt="micabeza" />
        <Project text="cuarto" alt="micabeza" />
      </ul>

      {/* <img className="about__img" src={aboutme} alt="about me"></img> */}
    </div>
  );
}

export default Portfolio;
