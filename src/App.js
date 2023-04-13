import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { SharedLayout } from "./pages/SharedLayout";
import { Contact } from "./pages/Contact";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="/about" element={<About></About>}></Route>
                        <Route path="/services" element={<Services></Services>}></Route>
                        <Route path="/contact" element={<Contact></Contact>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
