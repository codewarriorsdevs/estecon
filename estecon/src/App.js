import { About } from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Segments } from "./components/Segments/Segments";
import { Welcome } from "./components/Welcome/Welcome";




function App() {
  return (
    <>

      <Navbar />
      <Welcome />
      <About />
      <Segments />

    </>
  );
}

export default App;
