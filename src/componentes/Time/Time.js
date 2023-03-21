import './Time.css'

const Time = (props) => {
    const cssSection = { backgroundColor: props.corSecundaria }
    const cssH3 = {borderColor: props.corPrimaria}

    return (
        <section className="time" style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
        </section>
    )
}

export default Time