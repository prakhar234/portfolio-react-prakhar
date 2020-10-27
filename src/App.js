import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";

import styles from './App.module.css';
import Loader from "./components/UI/Loader/Loader";

const Home = React.lazy(() => {
  return import("./containers/Home/Home");
});

const About = React.lazy(() => {
  return import("./containers/About/About");
});

const Portfolio = React.lazy(() => {
  return import("./containers/Portfolio/Portfolio");
});

const routes = (
  <Switch>
    <Route path="/" exact render={(props) => <Home {...props} />}></Route>
    <Route path="/about" render={(props) => <About {...props} />}></Route>
    <Route path="/portfolio" render={(props) => <Portfolio {...props} />}></Route>
  </Switch>
)

function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback={<Loader />}>{routes}</Suspense>
    </div>
  );
}

export default App;
