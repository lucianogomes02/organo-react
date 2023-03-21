import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import {useState} from "react";
import Time from "./componentes/Time/Time";

function App() {
    const [colaboradores, setColaboradores] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
    </div>
  );
}

export default App;
