import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import Para from "./comps/Para";
import cirs from "./json/cirs.json";

function Cirs() {
  let jName = cirs;
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".container").removeClass("dark");
    } else {
      $(".container").addClass("dark");
    }
  });
  return (
    <div className="container program-page-container dark">
      <div className="page-wrapper">
        <Para title={jName.title_1} text={jName.text_1}/>
        <Para title={jName.title_2} text={<><b>
          <i>Programming:</i>
        </b> Some computer and information research scientists study and design new programming languages that are used to write software. New languages make software writing efficient by improving an existing language, such as Java, or by simplifying a specific aspect of programming, such as image processing.<br /><br /><b>
            <i>Robotics:</i>
          </b> These scientists study the development and application of robots.
          They explore how a machine can interact with the physical world. For
          example, they may create systems that control the robots or design
          robots to have features such as information processing or sensory
          feedback.<br /><br />
          Some computer and information research scientists work on
          multidisciplinary projects with electrical engineers, computer
          hardware engineers, and other specialists. For example, robotics
          specialists and engineers who design robots’ hardware may team up to
          test whether the robots complete tasks as intended.</>} />
        <Para title={jName.title_3} text={jName.text_3} />
        <Para title={jName.title_4} text={jName.text_4} />
        <Para title={jName.title_5} text={jName.text_5} />
      </div>
    </div>
  );
}

export default Cirs;
