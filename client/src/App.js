import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import $ from "jquery";

import { Layout, NoPage, Settings } from "./components/global";
import { Home, Jobs, Feedback, Contact, About } from "./components";
import CursorColors from "./components/global/settings/pages/CursorColors";
import {
  Cirs,
  Cna,
  Cp,
  Css,
  Csa,
  Da,
  Isa,
  Ncsa,
  Sd,
  Wd,
} from "./components/jobs/pages";
import RussellTable from "./components/about/RussellTable";
import CarpenterTable from "./components/about/CarpenterTable";
import RussellInfo from "./components/about/info/RussellInfo";
import CarpenterInfo from "./components/about/info/CarpenterInfo";
import Uniforms from "./components/about/info/Uniforms";
import Curriculum from "./components/about/info/Curriculum";
import Videos from "./components/about/info/Videos";

import "./styles/global/uni.scss";

function App() {
  var first_visit = false;
  const location = useLocation();
  const checkFirstVisit = () => {
    if (localStorage.getItem("was_visited")) {
      return;
    }
    first_visit = true;
    localStorage.setItem("theme", "dark");
    localStorage.setItem("was_visited", 1);
  };
  $(document).ready(function () {
    document.onkeyup = function (e) {
      if (e.ctrlKey && e.which === 66) {
        localStorage.setItem("cursorColor", "#a71624");
        window.location.reload();
      }
    };
    try {
      console.clear();
      console.log("Working!");
      localStorage.setItem("status", "working");
    } catch (e) {
      console.log(e);
      localStorage.setItem("status", e);
    }
    console.log("First visit? " + first_visit);
    console.clear();
    checkFirstVisit();
    for (let i; i < 1; i++) {
      window.location.reload();
    }
  });
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} key={location.pathname} />
          <Route path="contact" element={<Contact />} key={location.pathname} />
          <Route path="jobs" key={location.pathname}>
            <Route index element={<Jobs />} />
            <Route path="cirs" element={<Cirs />} />
            <Route path="cna" element={<Cna />} />
            <Route path="cp" element={<Cp />} />
            <Route path="css" element={<Css />} />
            <Route path="csa" element={<Csa />} />
            <Route path="da" element={<Da />} />
            <Route path="isa" element={<Isa />} />
            <Route path="ncsa" element={<Ncsa />} />
            <Route path="sd" element={<Sd />} />
            <Route path="wd" element={<Wd />} />
          </Route>
          <Route path="info" element={<About />} key={location.pathname}>
            <Route
              index
              element={
                <>
                  <div className="instance">
                    <h1>Click a button to navigate</h1>
                  </div>
                </>
              }
            />
            <Route path="russell">
              <Route index element={<RussellTable />} />
              <Route path="teacher" element={<RussellInfo />} />
            </Route>
            <Route path="carpenter">
              <Route index element={<CarpenterTable />} />
              <Route path="teacher" element={<CarpenterInfo />} />
            </Route>
            <Route path="uniforms">
              <Route index element={<Uniforms />} />
            </Route>
            <Route path="curriculum">
              <Route index element={<Curriculum />} />
            </Route>
            <Route path="videos">
              <Route index element={<Videos />} />
            </Route>
          </Route>
          <Route path="feedback" key={location.pathname}>
            <Route index element={<Feedback />} />
          </Route>
          <Route path="settings" element={<Settings />} key={location.pathname}>
            <Route path="cursor_color" element={<CursorColors />} />
          </Route>
          <Route path="*" element={<NoPage />} key={location.pathname} />
        </Route>
        <Route path="*" element={<NoPage />} key={location.pathname} />
      </Routes>
    </div>
  );
}

export { App };
