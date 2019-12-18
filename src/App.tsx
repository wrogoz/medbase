import React from "react";
import Layout from "./components/layout/Layout";
import { Provider, observer } from "mobx-react";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

@observer
class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    );
  }
}

export default App;
