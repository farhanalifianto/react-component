import { useSelector } from "react-redux"
import { useState,useContext } from "react"
import { useEffect,useRef } from "react"
import { DarkMode } from "../../context/darkmode"


const TableCart = (props) => {
    const {products} = props
    const cart = useSelector(state => state.cart.data)
    const [totalPrice,setTotalPrice] = useState(0)
    const {isDarkMode,setDarkMode} = useContext(DarkMode)

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
    
        //useRef
    const totalPriceRef = useRef(null)
    useEffect(()=>{
        if(cart.length > 0){
            totalPriceRef.current.style.display = 'table-row'
        }else{
            totalPriceRef.current.style.display = 'none'
        }
        },[cart])
        
    return (

        <table className={`text-left border-separate border-spacing-x-5 ${isDarkMode && 'text-white'}`}>
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

    )
}
export default TableCart