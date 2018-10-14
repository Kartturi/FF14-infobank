import React, { Component } from "react";
import axios from "axios";
import HeaderGroup from "./components/HeaderGroup";
import ShowContent from "./components/ShowContent";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isActive: "mounts"
    };

    this.callServer = this.callServer.bind(this);
  }

  callServer() {
    axios.get("/api/mounts").then(res => console.log(res.data));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <HeaderGroup />

          <ShowContent />
        </div>
      </Provider>
    );
  }
}

export default App;
