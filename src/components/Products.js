import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { addToCart } from '../Redux/actions'

function Products() {
    let dispatch = useDispatch()
    let products = useSelector(state =>state.products)
    console.log(products)
    return (
        <>
            {products.map(product => ( 
                        <div class="col p-3 m-0 text-center" key={product.id}>
                            <div class="card image border-0  h-100 bg-warning text-center">
                                <img src={product.image} style={{ maxWidth: 250 }} class="mx-auto card-img-top border border-danger rounded-circle" alt="..." />
                                <div class="card-body pb-0">
                                    <h6 class="card-title fw-bold text-center">{product.title}</h6>
                                </div>
                                <div class="text-center ">
                                    <h5 class="card-title text-danger">Price: ₹{product.price}</h5>
                                    <button onClick={()=>dispatch(addToCart(product.id))} type="button" class="btn btn-danger  px-5">Add to cart</button>
                                </div>
                            </div>
                        </div>    
                ))}
        </>
    )
}

export default Products
