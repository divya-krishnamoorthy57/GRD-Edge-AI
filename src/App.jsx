import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Assistant from "./pages/Assistant";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Courses />
        <Admissions />
        <Assistant />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;