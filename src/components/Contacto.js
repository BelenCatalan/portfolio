import React, { useEffect, useState } from 'react';
// import aboutme from '../images/iconsabout.jpg';
import '../stylesheets/App.scss';
import axios from 'axios';

function Contact(props) {
  console.log(props);

  const [formImput, setFormImput] = useState({ contactName: '', contactEmail: '', contactMessage: '' });
  console.log(formImput);

  // const handleContactText = (ev) => {
  //   console.log(ev.target.value);
  //   ev.preventDefault();
  //   props.handleContactText(
  //     { value: ev.target.value, name: ev.target.name }

  //     // value: ev.target.value,
  //     // name: ev.target.name,
  //   );
  // };

  const handleTextContact = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
    setFormImput({
      ...formImput,
      [ev.target.name]: ev.target.value,
    });
    // const data = {
    //   value: ev.target.value,
    //   name: ev.target.name,
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
  );
}

export default Contact;
