import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { logOut } from "../api-service"
import { removeUser } from "../redux/slices/user"
const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(state => state.user.loggedInStatus)
    const username = useSelector(state => state.user.user.username)
    const buttons = () => (
        <span className="flex gap-2 text-white">
            <Link to="/login" className="bg-yellow-600 p-2 rounded">Login</Link>
            <Link to="/register" className="bg-yellow-600 p-2 rounded">Register</Link>
        </span>
    )
    const welcome = () => (
        <span className="flex gap-2">
            <p className="">{`Hello, ${username}`}</p>
        </span>
    )
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeUser())
        logOut()
        history.push("/");

    }
    const out = () => (
        <nav className="flex items-center justify-between mx-3">
            <button type="button" className="bg-yellow-600 p-2 rounded text-white" onClick={handleClick}>Log Out <i className="fas fa-sign-out-alt"></i></button>
        </nav>
    )
    return (
        <header >
            <nav className="flex items-center justify-between mx-3 py-3">
                <span className="font-bold text-2xl text-yellow-900">冬 Fuyu</span>
                {state === "LOGGED_IN" ? welcome() : buttons()}
            </nav>
            {state === "LOGGED_IN" ? out() : ''}
        </header>
    )
}

export default Header
