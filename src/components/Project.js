import React, { useState, useRef } from 'react';
import '../stylesheets/App.scss';
import { CSSTransition } from 'react-transition-group';

function Project(props) {
  const [inHover, setHover] = useState(false);
  // const [inProp, setInProp] = useState(false);
  let changeBack = useRef(false);

  const handleLink = () => {
    console.log('me han clicado');
  };

  return (
    <li ref={changeBack} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="project__container">
      <CSSTransition ref={changeBack} in={inHover} timeout={6000} classNames="my-node">
        <div className="project__dark">
          {props.description}
          <button className="project__button--dark" onClick={handleLink}>
            Ver proyecto
          </button>
        </div>
      </CSSTransition>
      <div className="project__div">
        <img className="project__img" src={props.image} alt={props.alt}></img>
      </div>
      <hr className="project__hr"></hr>
      <small className="project__text--color">{props.linkto}</small>
      <p className="project__text--color">{props.text}</p>
    </li>
  );
}

export default Project;
