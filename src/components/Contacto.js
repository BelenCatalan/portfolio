import React, { useEffect, useState } from 'react';
// import aboutme from '../images/iconsabout.jpg';
import '../stylesheets/App.scss';
import axios from 'axios';
import belenmedia from '../images/belenmedia.jpg';
import belen from '../images/belen.jpg';

function Contact(props) {
  console.log(props);

  const [formImput, setFormImput] = useState({ contactName: '', contactEmail: '', contactMessage: '' });
  console.log(formImput);

  const handleTextContact = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
    setFormImput({
      ...formImput,
      [ev.target.name]: ev.target.value,
    });
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormImput({
        contactName: '',
        contactEmail: '',
        contactMessage: '',
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'https://formspree.io/mdowjzye',
      data: formImput,
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!');
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div className="about__div">
      <div className="contact__div">
        <img className="contact__img" src={belen} alt=""></img>
      </div>
      <div className="contact__div--form">
        <form onSubmit={handleOnSubmit}>
          <label>Nombre Apellido</label>
          <input className="" type="text" name="contactName" placeholder="Belén Catalán" onChange={handleTextContact} value={formImput.contactName} />

          <label htmlFor="">Email</label>
          <input className="" type="text" name="contactEmail" placeholder="email@gmail.com" onChange={handleTextContact} value={formImput.contactEmail} />

          <label htmlFor="">
            Mensaje
            <textarea className="" name="contactMessage" onChange={handleTextContact} value={formImput.contactMessage}></textarea>
          </label>
          <div>
            <button type="submit" disabled={serverState.submitting}>
              Enviar
            </button>
          </div>
          {serverState.status && <p className={!serverState.status.ok ? 'errorMsg' : ''}>{serverState.status.msg}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
