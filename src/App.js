import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Knowledges from "./components/pages/Knowledges";
import Portfolio from "./components/pages/Portfolio";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Knowledges" component={Knowledges} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
