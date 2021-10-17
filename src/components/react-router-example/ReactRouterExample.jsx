import React from "react";

import { Route } from "react-router-dom";

import Navbar from "./navbar/navbar.component";
import Home from "./home/home.component";
import Projects from "./projects/projects.component";
import OurTeam from "./our-team/our-team.component";
import ContactUs from "./contact-us/contact-us.component";

const ReactRouterExample = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/our-team" component={OurTeam} />
      <Route exact path="/contact-us" component={ContactUs} />
    </>
  );
};

export default ReactRouterExample;
