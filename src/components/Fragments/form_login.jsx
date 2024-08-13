import FormInput from "../Elements/Input"
import Button from "../Elements/Button/button"
import { useEffect, useRef } from "react";
const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem('email',event.target.email.value)
        localStorage.setItem('password',event.target.password.value)
        window.location.href ="/product"
    };
    const emailRef = useRef(null);
   useEffect(() => {
       emailRef.current.focus()
   },[])
    return (
        <form onSubmit={handleLogin}>
            <FormInput 
                text="Email" 
                name="email" 
                type="text" 
                placeholder="email"
                ref={emailRef}/>
            <FormInput 
                text="Password" 
                name="password" 
                type="password" 
                placeholder="*******"/>
            <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
            
            
        </form>
    )
}
export default FormLogin