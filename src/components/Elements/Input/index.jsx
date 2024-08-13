import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

const FormInput = forwardRef((props,ref)=>{
    const {name,text,type,placeholder} = props
    return(
        <div className="mb-6">
            <Label text={text}></Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref}></Input>
        </div>
    )

})
export default FormInput;