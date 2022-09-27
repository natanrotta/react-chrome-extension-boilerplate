/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
const Contact = () => {
  const [userPhone, setUserPhone] = useState(null);

  const showAlert = (message) => {
    alert(message)
  }

  const isGroup = (phone) => {
    return phone.includes('@');
  }

  const handle = () => {
    const regex = "(?<=false_|true_)(.*)(?=@)";
    const element = document.querySelector('[data-id*="false_"]');
    if (element) {
      const phone = element?.dataset?.id.toString().match(regex)[0];
      if (isGroup(phone)) {
        showAlert('Grupo não pode, apenas contatos')
        return
      }
      console.log(phone)
      setUserPhone(phone);
    } else {
      showAlert('Você precisa abrir o chat')
    }
  };

  return (
    <div>
      <p>
        Contato: <b>{userPhone}</b>
      </p>
      <button onClick={() => handle()}>FIND</button>
    </div>
  );
};

export default Contact;
