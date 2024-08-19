import Button from "../Elements/Button/button"
import { useLogin } from "../../hooks/useLogin"
const NavBar = () => {
    const username = useLogin()
    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.href ="/login"
    }
    return(
            <div className="flex w-full fixed justify-start h-20 bg-blue-600 text-white items-center px-5">{username}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
    )
}

export default NavBar