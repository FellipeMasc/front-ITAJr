import { CardList } from "./CardList"
import "../assets/css/list.css"

export const List = () => {
    return (
        <div className="list" id="list" data-list-path="/list">
            <div className="list-title">
                <h2>
                    ÁREAS DE <br></br>
                    <span>ATUAÇÃO</span>
                </h2>
            </div>
            <div className="list-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe unde
                    repellendus a assumenda in voluptatibus aliquid qui quas nostrum
                </p>
            </div>
            <div className="list-center featured-center">
                <CardList logo={`phone_android`} text={"Aplicativos"}></CardList>
                <CardList logo={`local_convenience_store`} text={"E-commerce"}></CardList>
                <CardList logo={`empty_dashboard`} text={"DashBoards"}></CardList>
                <CardList logo={`monitoring`} text={"Análise de Dados"}></CardList>
                <CardList logo={`language`} text={"Websites"}></CardList>
                <CardList logo={`connect_without_contact`} text={"Análise de mercado"}></CardList>
            </div>
        </div>
    )
}
