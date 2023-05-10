import { useState } from "react"
import axios from "axios"

export const LoginForm = () => {
    const [email, SetEmail] = useState(null)
    const [pass, SetPass] = useState(null)

    const handleEmail = (e) => {
        SetEmail(e.target.value)
    }

    const handlePass = (e) => {
        SetPass(e.target.value)
    }

    const handleForm = async (e) => {
        e.preventDefault()
        console.log("flow ne")
        try {
            const resp = await axios.post("http://localhost:5000/api/v1/login", {
                name: email,
                password: pass,
            })
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="login-form" onSubmit={handleForm}>
            <h3>Login</h3>
            <p>Entre na sua conta abaixo</p>
            <label className="login-label" htmlFor="email">
                Email
            </label>
            <input
                type="text"
                className="login-input"
                id="email"
                onChange={handleEmail}
                placeholder="Digite seu email"
            ></input>
            <label className="login-label" htmlFor="password">
                Senha
            </label>
            <input
                type="password"
                className="login-input"
                id="password"
                onChange={handlePass}
                placeholder="Digite sua senha"
            ></input>
            <button className="btn-login" type="submit">
                Entrar
            </button>
        </form>
    )
}
