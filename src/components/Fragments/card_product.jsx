import { Children } from "react"
import Button from "../Elements/Button/button"

const CardProduct = (props) =>{
    const {children} = props
    return(
    <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
    </div>
    )
}

const Header = (props) =>{
    const {image} = props
    return(
        <a href="#">
        <img 
        src={image} 
        alt="product"
        className="p-8 rounded-t-lg"
        ></img>
    </a>
    )
}

const Body = (props) =>{
    const {children, title} = props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white ">{title}</h5>
            </a>
            <p className="text-sm text-white">
                {children}
            </p>
        </div>
    )
}
const Footer = (props) =>{
    const {price, HandleAddToCart,id} = props
    return(
        <div className="flex items-center justify-between px-5 pb-5">
        <span className=" font-bold text-white">Rp {price.toLocaleString('id-ID',{styles:'currency',  currency:'IDR'})}</span>
        <Button variant="bg-blue-600" onClick={() => HandleAddToCart(id)}>Add To Cart</Button>
    </div> 
    )
}
CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct