import React, { useState } from "react";
import { questions } from "./Questions";
import AccordionShow from "./AccordionShow";
import "./accordion.css";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main_div">
        <h1>Programming Questions</h1>
        {data.map((currEle) => {
          return <AccordionShow key={currEle.id} {...currEle} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
