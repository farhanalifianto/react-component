import FormLogin from "../components/Fragments/form_login"
import Auth from "../components/Layouts/auth"
import { Link } from "react-router-dom"
const LoginPage = () =>{
    return(
        <Auth title="Login" type="login">
            <FormLogin/>
        </Auth>
    )
}
export default LoginPage