import FormInput from "../Elements/Input"
import Button from "../Elements/Button/button"
import {  useState,useEffect, useRef } from "react";
import {login} from "../../service/auth.service"
const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")
    const handleLogin = (event) => {
        event.preventDefault()
        // localStorage.setItem('email',event.target.email.value)
        // localStorage.setItem('password',event.target.password.value)
        // 
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };
        login(data,(status,res)=>{
            if (status){
                localStorage.setItem("token",res)
                window.location.href ="/products"
            }else{
                setLoginFailed(res.response.data)
            }
        })
    }
    const usernameRef = useRef(null);
    
   useEffect(() => {
       usernameRef.current.focus()
   },[])
    return (
        <form onSubmit={handleLogin}>
            <p className="text-red-500"></p>

            <FormInput 
                text="Username" 
                name="username" 
                type="text" 
                placeholder="John Doe"
                ref={usernameRef}/>
            <FormInput 
                text="Password" 
                name="password" 
                type="password" 
                placeholder="*******"/>
            <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
            
        </form>
    )
}
export default FormLogin