import { LoginForm } from "../components/LoginForm"
import "../assets/css/login.css"

export const Login = () => {
    return (
        <div className="login-card">
            <header className="login-header">Área de Membros</header>
            <LoginForm></LoginForm>
            <footer className="login-footer">
                <p>É a sua primeira vez aqui?</p>
                <a href="#criar">Crie uma conta</a>
            </footer>
        </div>
    )
}
