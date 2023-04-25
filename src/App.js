import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { SharedLayout } from "./pages/SharedLayout"
import { Contact } from "./pages/Contact"
import { Login } from "./pages/Login"
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="/contact" element={<Contact></Contact>}></Route>
                        <Route path="/login" element={<Login></Login>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
