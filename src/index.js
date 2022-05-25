import { createRoot } from "react-dom";

import App from "./../src/App.js";

const container = document.querySelector(".root");
const root = createRoot(container);

root.render(<App />);