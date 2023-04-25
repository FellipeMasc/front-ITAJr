export const LoginForm = () => {
    return (
        <form className="login-form">
            <h3>Login</h3>
            <p>Entre na sua conta abaixo</p>
            <label className="login-label">Email</label>
            <input type="text" className="login-input"></input>
            <label className="login-label">Senha</label>
            <input type="text" className="login-input"></input>
            <button className="btn-login">Entrar</button>
        </form>
    )
}
