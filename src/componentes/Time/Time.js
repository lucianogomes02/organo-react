import './Time.css'
import Colaborador from "../Colaborador/Colaborador";

const Time = ({ colaboradores, nome, corPrimaria, corSecundaria, aoDeletar }) => {
    const cssSection = { backgroundColor: corSecundaria }
    const cssH3 = {borderColor: corPrimaria}

    return (
        colaboradores.length > 0 &&
        <section className="time" style={cssSection}>
            <h3 style={cssH3}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>
                        {
                            return <Colaborador
                                key={indice}
                                nome={colaborador.nome}
                                imagem={colaborador.imagem}
                                cargo={colaborador.cargo}
                                corDeFundo={corPrimaria}
                                aoDeletar={aoDeletar}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
}

export default Time