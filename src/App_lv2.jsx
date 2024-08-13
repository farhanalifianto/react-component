import React from "react"
import Button from "./components/Elements/Button/button"
import FormInput from "./components/Elements/Input"



export default function App() {
  return (
      <div className={`flex justify-center h-screen bg-white items-center`}>
        <div className="w-full max-w-xs">
          <h1 className="text-blue-500 text-3xl mb-2">login</h1>
          <p className="font-medium mb-4 text-sm text-slate-500">enter your details</p>
          <form action="">
            <FormInput htmlFor="email" text="email" name="email" type="text" placeholder="email"/>
            <FormInput htmlFor="password" text="password" name="password" type="password" placeholder="*******"/>
            <Button variant="bg-blue-600 w-full" text="login"></Button>
            
            
          </form>

        </div>
      </div>
  )

}
