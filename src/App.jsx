import React, { Component } from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import { ContactProvider } from "./context/ContactProvider";
import Routes from "./router/index";

class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <ContactProvider>
          <Header />
          <Routes />
        </ContactProvider>
      </MemoryRouter>
    );
  }
}

export default App;
