import { Link, Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
