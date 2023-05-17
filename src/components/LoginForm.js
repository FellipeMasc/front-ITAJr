import { useEffect, useState } from "react"
import axios from "axios"

export const LoginForm = (props) => {
    const [email, SetEmail] = useState(null)
    const [pass, SetPass] = useState(null)
    const [isOn, setIsOn] = useState([true])

    const { user, setUser } = props

    const handleEmail = (e) => {
        SetEmail(e.target.value)
    }

    const handlePass = (e) => {
        SetPass(e.target.value)
    }

    const handleForm = async (e) => {
        e.preventDefault()
        if (email && pass) {
            try {
                const resp = await axios.post("http://localhost:5000/api/v1/login", {
                    name: email,
                    password: pass,
                })
                const token = resp.data.token
                localStorage.setItem("token", token)
                setIsOn((prev) => {
                    return [...prev]
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Email ou Senha em branco!!")
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        const fetchData = async (token) => {
            try {
                const { data } = await axios.get("http://localhost:5000/api/v1/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setUser(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (token) {
            fetchData(token)
        }
    }, [isOn])

    return (
        <form className="login-form" onSubmit={handleForm}>
            <h3>Login</h3>
            <p>Entre na sua conta abaixo</p>
            <label className="login-label" htmlFor="email">
                Usuário
            </label>
            <input
                type="text"
                className="login-input"
                id="email"
                onChange={handleEmail}
                placeholder="Digite seu usuário"
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
