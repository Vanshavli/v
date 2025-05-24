import React from "react";
import { createRoot } from "react-dom/client";
import DNAHealthAnalyzer from "./health.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<DNAHealthAnalyzer />);