import Button from "../components/Elements/Button/button"
import CardProduct from "../components/Fragments/card_product"
import { useState, useEffect, useRef } from "react"
import { getProducts } from "../service/product.service"
import { getUsername } from "../service/auth.service"



const ProductPage = (props) =>{
    const [cart,setCart] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
    const [products,setProducts] = useState([])
    const [username,setUsername] = useState("")

    //menyimpan keranjang
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    },[])

    //menyimpan token
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            setUsername(getUsername(token))}
        else{
            //jika token tidak ada
            window.location.href ="/login"
        }
  
    },[])
    //menyimpan product
    useEffect(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    //menyimpan total price
    useEffect(()=>{
    if(products.length > 0 && cart.length > 0){
        const sum = cart.reduce((acc,item)=>{
            const product = products.find((product)=>product.id === item.id);
            return acc + product.price * item.qty
        },0);
        setTotalPrice(sum)
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    },[cart,products]);



    //untuk keluar
    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.href ="/login"
    }

    //untuk add to cart
    const HandleAddToCart = (id) =>{
        if(cart.find((item)=>item.id === id)){
            setCart(
                cart.map((item)=>item.id === id? {...item,qty:item.qty+1}:item)
            )
        }else{
            setCart([...cart,{id,qty:1}])
        }
    }

    //useRef
    const totalPriceRef = useRef(null)
    useEffect(()=>{
        if(cart.length > 0){
            totalPriceRef.current.style.display = 'table-row'
        }else{
            totalPriceRef.current.style.display = 'none'
        }
        },[cart])
    return(
    <>  
        {/* navbar */}
        <div className="flex w-full fixed justify-start h-20 bg-blue-600 text-white items-center px-5">{username}
            <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
        {/* navbar section end */}
        <div className="flex justify-center py-5 pt-20">
            <div className="w-3/4 flex flex-wrap">
            {products.length > 0 && products.map((product)=>(
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body title={product.title}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}
                HandleAddToCart={HandleAddToCart}/>
            </CardProduct>
            ))}
            </div>
            <div className="w-1/4 ">
                <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                <table className="text-left border-separate border-spacing-x-5">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 && cart.map((item)=>{
                            const product = products.find((p) => p.id === item.id)
                            return(
                                // isi table cart
                                <tr key={item.id}>
                                    <td>{product.title.substring(0,10)}...</td>
                                    <td>Rp {product.price.toLocaleString('id-ID',{styles:'currency',  currency:'IDR'})}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp.{(product.price * item.qty).toLocaleString('id-ID',{styles:'currency',  currency:'IDR'})}</td>
                                </tr>
                            )
                        })}
                        <tr ref={totalPriceRef}>
                            <td colSpan={3}>
                                <b>Total Price</b>
                            </td>
                            <td>
                                <b>Rp {totalPrice.toLocaleString('id-ID',{styles:'currency',  currency:'IDR'})}</b>
                            </td>
                        </tr>
                    </tbody>
                    <div>
                       
                    </div>
                </table>
            </div>
        </div>
    </>
    )
}
export default ProductPage