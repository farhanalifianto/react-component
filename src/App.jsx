import React from "react"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"




export default function App() {
  return (
      <div className={`flex justify-center h-screen bg-white items-center`}>
        {/* <LoginPage></LoginPage> */}
        <RegisterPage></RegisterPage>
      </div>

  )

}
