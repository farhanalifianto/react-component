import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const error = useRouteError()
    return(
        <div className="flex justify-center items-center h-screen animate-spin">
            <div className="text-center"><h1>404</h1>
            <p>an unexpected error has occured</p>
            <p>
                {error.statusText || error.message}
            </p>
            </div>
        </div>
    )
}
export default ErrorPage