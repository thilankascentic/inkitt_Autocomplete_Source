import { render } from "react-dom";
import React from "react";
import "babel-polyfill";

import AutoComplete from "./autocomplete.jsx"

const containerEl = document.getElementById("container");

render(
  <AutoComplete/>,
  containerEl
);
  