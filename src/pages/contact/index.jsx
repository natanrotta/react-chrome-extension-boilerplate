/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useMutationObserver } from "../../hooks";

const Contact = () => {
  const [userPhone, setUserPhone] = useState(null);
  const [isMutationObserverActive, setIsMutationObserverActive] =
    useState(true);

  const handleStartMutationObserverClick = () => {
    setIsMutationObserverActive(true);
  };

  const handleStopMutationObserverClick = () => {
    setIsMutationObserverActive(false);
  };

  const isGroup = (phone) => {
    return phone.includes("@");
  };

  const handle = () => {
    const regex = "(?<=false_|true_)(.*)(?=@)";
    const element = document.querySelector(
      '[data-id*="false_"],[data-id*="true_"]'
    );
    if (element) {
      const phone = element?.dataset?.id.toString().match(regex)[0];
      if ((userPhone && userPhone === phone) || isGroup(phone)) {
        return;
      }
      setUserPhone(phone);
    }
  };

  useMutationObserver("app", isMutationObserverActive, (mutations) => {
    handle();
  });
  return (
    <div>
      <p>
        Contato: <b>{userPhone}</b>
      </p>
      <button onClick={() => handle()}>FIND</button>

      <button
        type="primary"
        className="primarybutton"
        onClick={
          isMutationObserverActive
            ? handleStopMutationObserverClick
            : handleStartMutationObserverClick
        }
      >
        {isMutationObserverActive ? "Stop" : "Start"} MutationObserver
      </button>

      {isMutationObserverActive ? "on" : "off"}

      {isMutationObserverActive && (
        <p>
          MutationObserver is now active! Open devtools and check the console
        </p>
      )}
    </div>
  );
};

export default Contact;
