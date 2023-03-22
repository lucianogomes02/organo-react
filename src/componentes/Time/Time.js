import './Time.css'
import Colaborador from "../Colaborador/Colaborador";
import { v4 as uuidv4 } from 'uuid'

const Time = ({ colaboradores, time, mudarCor, aoDeletar }) => {
    const cssSection = { backgroundColor: time.corSecundaria }
    const cssH3 = {borderColor: time.corPrimaria}

    return (
        colaboradores.length > 0 &&
        <section className="time" style={cssSection}>
            <input type='color' className='input-cor' value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.id)}/>
            <h3 style={cssH3}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                        {
                            return <Colaborador
                                key={uuidv4()}
                                id={uuidv4()}
                                nome={colaborador.nome}
                                imagem={colaborador.imagem}
                                cargo={colaborador.cargo}
                                corDeFundo={time.corPrimaria}
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