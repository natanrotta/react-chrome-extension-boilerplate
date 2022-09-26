/*global chrome*/
/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import App from "./App";
class Main extends React.Component {
  render() {
    return (
      <Frame
        head={[
          <link
            type="text/css"
            rel="stylesheet"
            href={chrome.runtime.getURL("/static/css/content.css")}
          ></link>,
        ]}
      >
        <FrameContextConsumer>
          {({ document, window }) => {
            return <App document={document} window={window} isExt={true} />;
          }}
        </FrameContextConsumer>
      </Frame>
    );
  }
}

const app = document.createElement("div");
const whatsappWeb = document.getElementById("app");

app.id = "clint-extension";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
   
      toggle();
    
  }
});


const toggle = () => {
  if (app.style.display === "none") {
    app.style.display = "block";
    whatsappWeb.setAttribute(
      "style",
      "width: calc(100% - 400px); max-width: 100%;"
    );
  } else {
    app.style.display = "none";
    whatsappWeb.setAttribute("style", "width: 100%; max-width: 100%;");
  }
};
