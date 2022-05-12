import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {

  // Get the history object
  const history = useHistory();
  const goBack = (e) => {
    // imperatively redirect back
    e.preventDefault();
    history.goBack();
  }

  const goForward = (e) => {
    // imperatively redirect forward
    e.preventDefault();
    history.goForward();
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
