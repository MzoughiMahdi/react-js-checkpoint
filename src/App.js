import Navbar from "./components/Navbar";
import "./styles/navbar.css"
import "./index.css"
import "./ContactForm"
import ContactForm from "./ContactForm";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <article>
          <h1>How is Mahdi Mzoughi ? </h1>
          Ingénieur informatique fraîchement diplômé d’ESPRIT. Je suis actuellement à la recherche d'une opportunité pour fonder ma carrière. J'ai suivi divers stages
et formations durant mon cursus universitaire. Je suis une personne responsable, polyvalente et motivée..{" "}
          <a
            href="https://www.linkedin.com/in/mahdi-mzoughi/"
            target="_blank"
            rel="noreferrer"
          >
            Read More ...


            
          </a>
          

        </article>
      </div>
      <ContactForm/>
    </div>
  );
}

export default App;