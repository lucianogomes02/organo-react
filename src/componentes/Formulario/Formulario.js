import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { v4 as uuidv4 } from 'uuid'

import {useState} from "react";

const Formulario = ({aoColaboradorCadastrado, times, cadastrarTime}) => {

    const [id] = useState(uuidv4())
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('http://github.com/lucianogomes02.png')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado(
            {
                id: id,
                nome: nome,
                cargo: cargo,
                imagem: imagem,
                time: time
            }
        )
        setNome("")
        setCargo("")
        setImagem("http://github.com/lucianogomes02.png")
        setTime("")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar o um novo time</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario