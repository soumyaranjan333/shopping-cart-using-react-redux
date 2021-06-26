export const SORT_PRODUCT= "SORT_PRODUCT"
export const FILTER_PRODUCT= "FILTER_PRODUCT"
export const ADD_PRODUCT= "ADD_PRODUCT"
export const REMOVE_PRODUCT= "REMOVE_PRODUCT"

export function sortProducts(products){
    return{
        type: SORT_PRODUCT,
        payload:products
    }
}

export function filterProducts(products, size){
    console.log(products)
    // return{
    //     type: FILTER_PRODUCT,
    //     payload: {
    //         size: size,
    //         items:
    //           size === ""
    //             ? products
    //             : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    //       },
        
    // }
}

export function addToCart(id){
    return{
        type: ADD_PRODUCT,
        payload:{id:id}
    }
}

export function removeFromCart(id){
    return{
        type: REMOVE_PRODUCT,
        payload:{id:id}
    }
}