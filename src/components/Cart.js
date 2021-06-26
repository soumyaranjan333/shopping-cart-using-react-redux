import React from 'react'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/actions'
import {useDispatch} from 'react-redux'

function Cart() {
    let dispatch = useDispatch()
    let products = useSelector(state => state)
    console.log(products.cartItems)
    return (
        <div>
            <div className=" m-1 bg-light p-2 border-bottom border-warning">
                {products.cartItems.length === 0 ? (
                    <div className="text-danger ">Cart is empty.</div>
                ) : (
                    <div className="text-primary border-primary">You have {products.cartItems.length} items in the cart.</div>
                )
                }
            </div>
            <div>
                {products.cartItems.map(item => (
                    <div class="card mb-3" style={{}} key={item.id}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.image} style={{ maxWidth: 100 }} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title ">{item.title}</h5>
                                </div>
                                <div className="text-center mb-2">
                                    {item.price} X {item.qty}
                                    <button type="button" class="ms-4  btn btn-info" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {products.cartItems.length!==0 && (
                    <div className="text-center text-danger fw-bold">Total: {" "}₹
                    {products.cartItems.reduce((a,c)=>a + (c.price*c.qty) , 0)}
                    <button type="button" class="mx-5 px-5 btn btn-danger">Proceed</button>
                </div>
                )}
        </div>
    )
}

export default Cart
