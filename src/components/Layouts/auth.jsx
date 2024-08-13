import FormLogin from "../Fragments/form_login"
import { Link } from "react-router-dom"
const Auth = (props) =>{
    const {children,title,type} = props
    return(
      <div className={`flex justify-center h-screen bg-white items-center`}>
        <div className="w-full max-w-xs">
          <h1 className="text-blue-500 text-3xl mb-2">{title}</h1>
          <p className="font-medium mb-4 text-sm text-slate-500">Enter Your Details</p>
          {children}
          <Navigation type={type}/>
        </div>
      </div>
    )
}

const Navigation = ({type}) =>{
  if (type ==='login'){
    return(
    <p className="text-sm mt-4 text-center">
           Don't have an account?{" "}
           <Link to="/register" className="font-bold text-blue-600">
           Register
           </Link>
    </p>
    )
  }else{
    return(
      <p className="text-sm mt-4 text-center">
            Don't have an account? {" "}
            <Link to="/login" className="font-bold text-blue-600">
            Login
            </Link>
      </p>
    )
  }
}
export default Auth