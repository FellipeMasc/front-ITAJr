export const AsideContact = () => {
    return (
        <div className="aside-list">
            <div className="aside-contact">
                <h2>Nossos contatos</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint minus esse
                    quisquam pariatur.
                </p>
                <div>
                    <ul className="aside-icons">
                        <li>
                            <a
                                href="https://contate.me/fellipe_mascarenhas"
                                target="_blank"
                                rel="noreferrer"
                                className="aside-icon"
                            >
                                <i className={"fab fa-whatsapp"}></i> Whatsapp
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.facebook.com/itajunior.ej/"
                                target="_blank"
                                rel="noreferrer"
                                className="aside-icon"
                            >
                                <i className={"fab fa-facebook"}></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/itajunior.ej/"
                                target="_blank"
                                rel="noreferrer"
                                className="aside-icon"
                            >
                                <i className={"fab fa-instagram"}></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/itajunior/?originalSubdomain=br"
                                target="_blank"
                                rel="noreferrer"
                                className="aside-icon"
                            >
                                <i className={"fab fa-linkedin"}></i> Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="endereco">
                    Praça Marechal Eduardo Gomes, nº 50, Vila das Acácias, DCTA - São José dos
                    Campos
                </p>
                <section className="aside-footer">
                    <p className="telefone">(75) 99106-1150 </p>
                    <p className="email">fellipespd32@gmail.com</p>
                </section>
            </div>
        </div>
    )
}
