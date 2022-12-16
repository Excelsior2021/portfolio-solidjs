import { Routes, Route } from "@solidjs/router";
import MenuModal from "./components/MenuModal/MenuModal";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Bio from "./pages/Bio/Bio";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;
