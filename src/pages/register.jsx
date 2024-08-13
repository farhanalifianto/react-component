import FormRegister from "../components/Fragments/form_register"
import Auth from "../components/Layouts/auth"
import { Link } from "react-router-dom"
const RegisterPage = () =>{
    return(
        <Auth title="Register" type="register">
            <FormRegister/>
        </Auth>
    )
}
export default RegisterPage