/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { useMutationObserver } from "../hooks";
import { getCurrentPhone } from "../service";
import { useNavigate } from "react-router-dom";

const ContactContext = createContext();

function ContactProvider({ children }) {
  const navigate = useNavigate();
  const [currentPhone, setCurrentPhone] = useState(null);
  const [lastContact, setLastContact] = useState(null);
  const [isMutationObserverActive, setIsMutationObserverActive] = useState(true);

  useEffect(() => {
    handleStartMutationObserverClick()
  }, [])

  useEffect(() => {
    if (lastContact !== currentPhone) {
      navigate('/contact');
    }
  }, [lastContact, currentPhone])
  

  const handleStartMutationObserverClick = () => {
    setIsMutationObserverActive(true);
  };

  const handlePhone = () => {
    getCurrentPhone({ currentPhone, setCurrentPhone, setLastContact })
  };

  useMutationObserver("app", isMutationObserverActive, (mutations) => {
    handlePhone();
  });

  const context = {
    currentPhone,
    setCurrentPhone,
  };

  return (
    <ContactContext.Provider value={context}>
      {children}
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactProvider };
