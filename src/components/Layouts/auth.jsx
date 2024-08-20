import { useContext } from "react"
import FormLogin from "../Fragments/form_login"
import { Link } from "react-router-dom"
import { DarkMode} from "../../context/darkmode"
const Auth = (props) =>{
    const {children,title,type} = props
    const {isDarkMode,setDarkMode} = useContext(DarkMode)
    {console.log(isDarkMode)}
    return(
      <div className={`flex justify-center h-screen  items-center ${isDarkMode && 'bg-slate-900'}`}>
        <div className="w-full max-w-xs">
          <h1 className="text-blue-500 text-3xl mb-2">{title}</h1>
          <p className="font-medium mb-4 text-sm text-slate-500">Enter Your Details</p>
          {children}
          <Navigation type={type}/>
        </div>
        <button className="absolute top-2 right-2 p-2 bg-blue-600 rounded text-white " onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
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