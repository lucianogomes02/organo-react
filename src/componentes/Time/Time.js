import './Time.css'
import Colaborador from "../Colaborador/Colaborador";

const Time = ({ colaboradores, time, mudarCor, aoDeletar, aoFavoritar }) => {
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
                                key={colaborador.id}
                                colaborador={colaborador}
                                corDeFundo={time.corPrimaria}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
}

export default Time