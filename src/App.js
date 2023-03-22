import Banner from "./componentes/Banner/Banner"
import Formulario from "./componentes/Formulario/Formulario"
import {useState} from "react"
import Time from "./componentes/Time/Time"
import { v4 as uuidv4 } from 'uuid'

function App() {

    const [times, setTimes]  = useState(
        [
            {
                id: uuidv4(),
                nome: "Programação",
                corPrimaria: "#57C278",
                corSecundaria: "#D9F7E9"
            },
            {
                id: uuidv4(),
                nome: "Front-end",
                corPrimaria: "#82CFFA",
                corSecundaria: "#E8F8FF"
            },
            {
                id: uuidv4(),
                nome: "Data Science",
                corPrimaria: "#A6D157",
                corSecundaria: "#F0F8E2"
            },
            {
                id: uuidv4(),
                nome: "DevOps",
                corPrimaria: "#E06B69",
                corSecundaria: "#FDE7E8"
            },
            {
                id: uuidv4(),
                nome: "UX e Design",
                corPrimaria: "#DB6EBF",
                corSecundaria: "#FAE9F5"
            },
            {
                id: uuidv4(),
                nome: "Mobile",
                corPrimaria: "#FFBA05",
                corSecundaria: "#FFF5D9"
            },
            {
                id: uuidv4(),
                nome: "Inovação e Gestão",
                corPrimaria: "#FF8A29",
                corSecundaria: "#FFEEDF"
            },
        ]
    )

    const colaboradorInicial = [
        {
            id: uuidv4(),
            nome: 'Luciano Gomes',
            imagem: 'http://github.com/lucianogomes02.png',
            cargo: 'Desenvolvedor Python',
            time: 'Programação'
        }
    ]

    const [colaboradores, setColaboradores] = useState(colaboradorInicial)

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time =>
                {
                    if (time.id === id) {
                        time.corPrimaria = cor
                    }
                    return time
                }
            )
        )
    }

  return (
    <div className="App">
      <Banner/>
      <Formulario
          times={times.map(time  => time.nome)}
          aoColaboradorCadastrado={
            colaborador => aoNovoColaboradorAdicionado(colaborador)
          }
      />

      {times.map(time =>
          <Time
            key={time.id}
            time={time}
            colaboradores={
                colaboradores.filter(
                    colaborador => colaborador.time === time.nome
                )
            }
            mudarCor={mudarCorDoTime}
            aoDeletar={deletarColaborador}
      />)}
    </div>
  )
}

export default App
