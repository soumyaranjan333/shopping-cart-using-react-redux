import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { sortProducts, filterProducts } from '../Redux/actions'

function Filter() {
    let dispatch = useDispatch()
    let products = useSelector(state =>state.products)
   
    console.log(products)
    
    return (
        <div>      
                <div className="d-flex justify-content-evenly align-items-center pb-2 m-2 border-bottom border-warning bg-light" >
                <div className="">{products.length} Products</div>
                <div className="">
                <select  class="form-select form-select-sm" value={products.sort} onClick={()=>dispatch(sortProducts(products))} aria-label=".form-select-sm example">
                        <option selected>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
               
                <div className="">
                    <select class="form-select form-select-sm" value={products.filter} onClick={()=>dispatch(filterProducts(products))}  aria-label=".form-select-sm example">
                        <option selected  value="all">ALL</option>
                        <option  value="XS">XS</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="S">S</option>
                        <option  value="XL">XL</option>
                        <option  value="XXL">XXL</option>
                        
                    </select>
                </div>
            </div>
             
        </div>
            )
}

export default Filter
