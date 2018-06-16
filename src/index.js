import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import "./style.css";
import Main from "./Main";
import { Provider } from "react-redux";
import articleAppStore from "./store";

const App = () => (
  <Provider store={articleAppStore}>
    <div>
      <Header />
      <Main />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
