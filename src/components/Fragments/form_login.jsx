import FormInput from "../Elements/Input"
import Button from "../Elements/Button/button"
const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem('email',event.target.email.value)
        localStorage.setItem('password',event.target.password.value)
        window.location.href ="/product"
    };
    return (
        <form onSubmit={handleLogin}>
            <FormInput 
                text="Email" 
                name="email" 
                type="text" 
                placeholder="email"/>
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