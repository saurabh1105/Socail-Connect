import React from "react";
import spinner from "./spinner.gif";

export default () => (
  <>
    <img
      src={spinner}
      style={{ width: "200px", amrgin: "auto", display: "block" }}
      alt="loading..."
    />
  </>
);
