/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../context/ContactProvider";
import { useMutationObserver } from "../../hooks";
import { getCurrentPhone } from "../../service";

const Contact = () => {
  const {
    currentPhone,
    setCurrentPhone
  } = useContext(ContactContext);

  const [isMutationObserverActive, setIsMutationObserverActive] = useState(true);

  useEffect(() => {
    handleStartMutationObserverClick()
  }, [])
  
  const handleStartMutationObserverClick = () => {
    setIsMutationObserverActive(true);
  };

  const handlePhone = () => {
    getCurrentPhone({ currentPhone, setCurrentPhone })
  };

  useMutationObserver("app", isMutationObserverActive, (mutations) => {
    handlePhone();
  });

  return (
    <div>
      <p>
        Contato: <b>{currentPhone}</b>
      </p>
    </div>
  );
};

export default Contact;
