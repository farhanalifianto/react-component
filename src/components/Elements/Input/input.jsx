import { forwardRef } from "react"

const Input = forwardRef((props,ref) => {
    const{type,name,placeholder} = props
    return(
        <input 
        type={type} 
        name={name} 
        id={name} 
        ref={ref}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} />
    )
})
export default Input    