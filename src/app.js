import React from "react";
import {createRoot} from "react-dom/client";
import Chatter from "./Chatter.js";

const root = createRoot(document.getElementById("app"));

root.render(<Chatter />);