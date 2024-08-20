import Button from "../Elements/Button/button"
import { useLogin } from "../../hooks/useLogin"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { DarkMode } from "../../context/darkmode"
import { useContext } from "react"
import { useTotalPrice } from "../../context/totalprice"
const NavBar = () => {
    const username = useLogin()
    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.href ="/login"
    }
    const [totalCart,setTotalCart] = useState(0)
    const cart = useSelector(state => state.cart.data)
    const {isDarkMode,setDarkMode} = useContext(DarkMode)
    const {total} = useTotalPrice()

        useEffect(()=>{
            const sum = cart.reduce((acc,item)=>{
                return acc + item.qty
            },0);
        setTotalCart(sum)},[cart]);

    return(
            <div className="flex w-full fixed justify-end h-20 bg-blue-600 text-white items-center px-5">{username}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
                <div className="flex item-justify-between bg-gray-600 items-center p-2 rounded-md ml-5">
                    item: {totalCart} | price :$ {Math.round(total * 100) / 100}

                </div>
                <Button variant="ml-5 bg-black " onClick={() => setDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
                </Button>

                
            </div>
    )
}

export default NavBar