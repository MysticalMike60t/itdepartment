import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import $ from "jquery";
import { AnimatePresence } from "framer-motion"

import NoPage from './components/global/NoPage';
import Layout from './components/global/Layout';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Programs from './components/programs/Programs';
import About from "./components/about/About";
import Feedback from './components/feedback/Feedback';
import Cirs from './components/programs/pages/Cirs';
import Cna from "./components/programs/pages/Cna";
import Cp from "./components/programs/pages/Cp";
import Css from "./components/programs/pages/Css";
import Csa from "./components/programs/pages/Csa";
import Da from "./components/programs/pages/Da";
import Isa from "./components/programs/pages/Isa";
import Ncsa from "./components/programs/pages/Ncsa";
import Sd from "./components/programs/pages/Sd";
import Wd from "./components/programs/pages/Wd";
import RussellTable from './components/about/RussellTable';
import CarpenterTable from './components/about/CarpenterTable';
import RussellInfo from "./components/about/info/RussellInfo";
import CarpenterInfo from "./components/about/info/CarpenterInfo";
import Uniforms from "./components/about/info/Uniforms";
import Curriculum from "./components/about/info/Curriculum";
import Videos from './components/about/info/Videos';

import './styles/global/uni.scss';

function App() {
  const location = useLocation();
  $(document).ready(function() {
    // try {
    //   console.clear();
    //   console.log("Working!");
    // } catch(e) {
    //   console.log(e);
    // }
  });
  return (
    <div>
      <AnimatePresence initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} key={location.pathname} />
            <Route path="contact" element={<Contact />} key={location.pathname} />
            <Route path="programs" key={location.pathname}>
              <Route index element={<Programs/>} />
              <Route path="cirs" element={<Cirs/>} />
              <Route path="cna" element={<Cna/>} />
              <Route path="cp" element={<Cp/>} />
              <Route path="css" element={<Css/>} />
              <Route path="csa" element={<Csa/>} />
              <Route path="da" element={<Da/>} />
              <Route path="isa" element={<Isa/>} />
              <Route path="ncsa" element={<Ncsa/>} />
              <Route path="sd" element={<Sd/>} />
              <Route path="wd" element={<Wd/>} />
            </Route>
            <Route path="info" element={<About/>} key={location.pathname}>
              <Route index element={<><div className="instance"><h1>Click a button to navigate</h1></div></>}/>
              <Route path="russell">
                <Route index element={<RussellTable/>}/>
                <Route path="teacher" element={<RussellInfo/>} />
              </Route>
              <Route path="carpenter">
                <Route index element={<CarpenterTable/>}/>
                <Route path="teacher" element={<CarpenterInfo/>}/>
              </Route>
              <Route path="uniforms">
                <Route index element={<Uniforms/>} />
              </Route>
              <Route path="curriculum">
                <Route index element={<Curriculum/>} />
              </Route>
              <Route path="videos">
                <Route index element={<Videos />} />
              </Route>
            </Route>
            <Route path="feedback">
              <Route index element={<Feedback />}/>
            </Route>
            <Route path="*" element={<NoPage/>} key={location.pathname} />
          </Route>
          <Route path="*" element={<NoPage/>} key={location.pathname} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export { App };
