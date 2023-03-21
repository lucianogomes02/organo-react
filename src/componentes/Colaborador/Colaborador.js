import './Colaborador.css'

const Colaborador = ({ nome, cargo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src="http://github.com/lucianogomes02.png" alt="Luciano Gomes"/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador