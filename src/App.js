import { Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Projects from "./components/projects/projects.component";
import OurTeam from "./components/our-team/our-team.component";
import ContactUs from "./components/contact-us/contact-us.component";

import "./App.css";

const App = () => (
  <div className="app">
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/our-team" component={OurTeam} />
    <Route exact path="/contact-us" component={ContactUs} />
  </div>
);

export default App;
