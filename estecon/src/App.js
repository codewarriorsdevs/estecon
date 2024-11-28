import { About } from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Segments } from "./components/Segments/Segments";
import { ServicesSec } from "./components/ServicesSec/ServicesSec";
import { Welcome } from "./components/Welcome/Welcome";
import {Team} from "./components/Team/Team"
function App() {
  return (
    <>

      <Navbar />
      <Welcome />
      <About />
      <ServicesSec />
      <Segments />
      <Team/>

    </>
  );
}

export default App;
