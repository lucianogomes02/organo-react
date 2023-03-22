import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    const estiloCabecalho = {backgroundColor: corDeFundo}
    return (
        <div className='colaborador'>
            <div className='deletar' onClick={aoDeletar}>Deletar</div>
            <div className='cabecalho' style={estiloCabecalho}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador