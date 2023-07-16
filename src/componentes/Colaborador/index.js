import './Colaborador.css'

const Colaborador =({nome, imagem ,cargo, corDeFundo}) => {
    const corFundo = { backgroundColor: corDeFundo }
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={corFundo}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;