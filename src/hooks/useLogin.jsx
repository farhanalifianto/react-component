import { useState, useEffect } from "react"
import { getUsername } from "../service/auth.service"

export const useLogin = () => {
        //menyimpan token
        const [username,setUsername] = useState("")

        useEffect(()=>{
            const token = localStorage.getItem('token')
            if (token){
                setUsername(getUsername(token))}
            else{
                //jika token tidak ada
                window.location.href ="/login"
            }
        },[])

        return username
}