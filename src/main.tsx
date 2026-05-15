import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// We prerender static HTML at build time for SEO/AI-crawler benefit, but
// we do NOT hydrate it: the prerender script captures the DOM after
// useEffects, Radix `useId`s and Helmet have already mutated it, which
// produces hydration mismatches. Instead, the prerendered HTML serves as
// the first-paint snapshot for users and the indexable content for bots,
// and React mounts a fresh tree on top. The visible cost is a brief
// flicker on initial load; the alternative would be a fragile SSR setup.
if (container.hasChildNodes()) {
  container.innerHTML = "";
}

createRoot(container).render(<App />);
