import { LoginForm } from "../components/LoginForm"
import "../assets/css/login.css"
import { useEffect, useState } from "react"

export const Login = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (user) {
            alert("Autenticação jwt deu certo")
        }
    }, [user])

    if (user) {
        return (
            <div className="dashboard-screen">
                <div className="dashboard-card">
                    <header className="dashboard-header">{`${user.msg}`}</header>
                    <footer className="dashboard-footer">
                        <p>{`${user.jwtsecret}`}</p>
                    </footer>
                    <button
                        className="btn-dashboard"
                        onClick={() => {
                            setUser(null)
                            localStorage.setItem("token", "")
                        }}
                    >
                        Voltar para o login
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className="login-card">
            <header className="login-header">Área de Membros</header>
            <LoginForm user={user} setUser={setUser}></LoginForm>
            <footer className="login-footer">
                <p>É a sua primeira vez aqui?</p>
                <a href="#criar">Crie uma conta</a>
            </footer>
        </div>
    )
}
