/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: `${location.pathname === "/" ? "red" : "gray"}`,
        }}
        onClick={() => handleClick("/")}
      >
        Home
      </button>
      <button
        style={{
          backgroundColor: `${
            location.pathname === "/contact" ? "red" : "gray"
          }`,
        }}
        onClick={() => handleClick("/contact")}
      >
        Contatos
      </button>
      <button
        style={{
          backgroundColor: `${
            location.pathname === "/phones" ? "red" : "gray"
          }`,
        }}
        onClick={() => handleClick("/phones")}
      >
        Telefones
      </button>
    </div>
  );
};

export default Header;
