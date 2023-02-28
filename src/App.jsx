import { Routes, Route } from "@solidjs/router"
import Header from "./components/Header/Header"
import Landing from "./pages/Landing/Landing"
import Bio from "./pages/Bio/Bio"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"

const App = () => (
  <>
    {/* <div class="counter">
      <img
        src="https://www.free-website-hit-counter.com/c.php?d=9&id=142620&s=5"
        alt="Hit Counter"
      />
    </div> */}
    <Header />
    <main class="main">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  </>
)

export default App
