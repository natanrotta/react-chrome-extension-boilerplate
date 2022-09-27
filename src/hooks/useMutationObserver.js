/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";

const observerConfig = {
  childList: true,
  subtree: true,
};

export const useMutationObserver = (targetId, isActive, callback) => {
  const observer = useMemo(() => new MutationObserver(callback), [callback]);

  useEffect(() => {
    if (isActive) {
      const targetNode = document.getElementById(targetId);
      observer.observe(targetNode, observerConfig);
    } else {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isActive, observer]);
};
