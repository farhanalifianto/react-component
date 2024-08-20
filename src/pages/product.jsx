import CardProduct from "../components/Fragments/card_product"
import { useState, useEffect, useContext, useRef } from "react"
import { getProducts } from "../service/product.service"
import { useLogin } from "../hooks/useLogin"
import TableCart from "../components/Fragments/tablecart"
import NavBar from "../components/Layouts/navbar"
import { DarkMode } from "../context/darkmode"
const ProductPage = (props) =>{
    const [products,setProducts] = useState([])
    const username = useLogin()
    const {isDarkMode,setDarkMode} = useContext(DarkMode)
    //menyimpan keranjang
    // useEffect(()=>{
    //     setCart(JSON.parse(localStorage.getItem('cart')) || [])
    // },[])
    //menyimpan product
    useEffect(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    return(
    <>      
        <NavBar/>
        <div className={`flex justify-center py-5 pt-20 ${isDarkMode && 'bg-slate-900'}`}>
            <div className="w-3/4 flex flex-wrap">
            {products.length > 0 && products.map((product)=>(
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}/>
                <CardProduct.Body title={product.title}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}/>
            </CardProduct>
            ))}
            </div>
            <div className="w-1/4 ">
                <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                <TableCart products={products}/>
            </div>
        </div>
    </>
    )
}
export default ProductPage