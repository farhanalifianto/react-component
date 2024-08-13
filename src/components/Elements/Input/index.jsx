import Label from "./label";
import Input from "./input";

const FormInput = (props)=>{
    const {name,text,type,placeholder} = props
    return(
        <div className="mb-6">
            <Label text={text}></Label>
            <Input type={type} name={name} placeholder={placeholder}></Input>
        </div>
    )

}
export default FormInput;