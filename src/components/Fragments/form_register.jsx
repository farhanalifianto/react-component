import FormInput from "../Elements/Input"
import Button from "../Elements/Button/button"
const FormRegister = (props) =>{
    return (
        <form action="">
            <FormInput text="Fullname" name="fullname" type="text" placeholder="Insert your name"/>
            <FormInput text="Email" name="email" type="text" placeholder="example@main.com"/>
            <FormInput text="Password" name="password" type="password" placeholder="*******"/>
            <FormInput text="Confirm Password" name="confirmPassword" type="password" placeholder="*******"/>
            <Button variant="bg-blue-600 w-full">Register</Button>
            
            
        </form>
    )
}
export default FormRegister