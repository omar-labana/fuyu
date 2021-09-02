import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="flex items-center justify-between mx-3 py-3">
            <span className="font-bold text-2xl text-blue-900">冬 Fuyu</span>
            <span className="flex gap-2 text-white">
                <Link to="/login" className="bg-black p-2 rounded">Login</Link>
                <Link to="/register" className="bg-black p-2 rounded">Register</Link>
            </span>
        </header>
    )
}

export default Header
