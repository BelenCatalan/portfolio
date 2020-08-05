import React from 'react';
// import aboutme from '../images/iconsabout.jpg';
import '../stylesheets/App.scss';

function contact(props) {
  console.log(props);
  const handleInputText = (ev) => {
    props.handleContactText({
      value: ev.target.value,
      name: ev.target.name,
    });
  };

  const handlerSubmit = (e) => e.preventDefault();

  return (
    <div className="about__div">
      <form onSubmit={handlerSubmit} action="" method="GET" id="info-user" className="">
        <label htmlFor="">Nombre Apellido</label>
        <input className="" type="" name="name" id="" placeholder="Belén Catalán" onChange={handleInputText} href="" value="" required />

        <label htmlFor="">Email</label>
        <input className="" type="" name="email" id="" placeholder="email@gmail.com" onChange={handleInputText} href="" value="" required />

        <label htmlFor="">
          Mensaje
          <textarea className="" name="message" onChange={handleInputText}></textarea>
        </label>
      </form>
    </div>
  );
}

export default contact;
