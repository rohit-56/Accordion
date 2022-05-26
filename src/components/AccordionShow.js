import React, { useState } from "react";
import "./accordion.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function AccordionShow(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="show_list">
        {!show ? (
          <AddIcon onClick={() => setShow(!show)} />
        ) : (
          <RemoveIcon onClick={() => setShow(!show)} />
        )}

        <p className="que">{props.question}</p>
      </div>
      <p className="answ">{show && props.answer}</p>
    </>
  );
}

export default AccordionShow;
