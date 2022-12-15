import { Routes, Route } from "@solidjs/router";
import MenuModal from "./components/MenuModal/MenuModal";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </>
);

export default App;
