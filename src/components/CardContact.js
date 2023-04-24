export const CardContact = () => {
    return (
        <div className="card-contact">
            <form className="form" onSubmit={() => {}}>
                <h3>Fale conosco</h3>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>
                    <input type="text" className="form-input" id="name" onChange={() => {}}></input>
                </div>
                <div className="form-row">
                    <label htmlFor="phone" className="form-label">
                        Telefone
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="phone"
                        onChange={() => {}}
                    ></input>
                </div>
                <div className="form-row">
                    <label htmlFor="description" className="form-label">
                        Descreva seu projeto
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="description"
                        onChange={() => {}}
                    ></input>
                </div>
                <button type="submit" className="btn">
                    Enviar
                </button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </form>
        </div>
    )
}
