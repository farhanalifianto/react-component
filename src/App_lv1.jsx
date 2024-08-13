import React from "react"
import Button from "./components/Elements/Button/button"



export default function App() {
  return (
      <div className={`flex justify-center h-screen bg-white items-center`}>
        <div className="w-full max-w-xs">
          <h1 className="text-blue-500 text-3xl mb-2">login</h1>
          <p className="font-medium mb-4 text-sm text-slate-500">enter your details</p>
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Email</label>
              <input type="text" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="example@email.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-slate-700 text-sm font-bold mb-2">Password</label>
              <input type="password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="********" />
            </div>
            <Button variant="bg-blue-600 w-full" text="login"></Button>
            
            
          </form>

        </div>
      </div>
  )

}
