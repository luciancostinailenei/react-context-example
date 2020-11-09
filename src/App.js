import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Sidebar } from "./parts";

import { Profile, Home, RefExample } from "./pages";

import styles from "./App.module.css";

import { UserProvider } from "./contexts";

const App = () => (
  <div className={styles.layout}>
    <Router>
      <UserProvider>
        <Sidebar />
        <div className={styles.right}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/ref-example" component={RefExample} />
          </Switch>
        </div>
      </UserProvider>
    </Router>
  </div>
);

export default App;
