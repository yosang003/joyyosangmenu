function addToCart(fooditem) {
    return {
        type : 'ADDTOCART',
        payload : fooditem
    }
}

function delFromCart(foodid){
    return {
        type : 'DELFROMCART',
        playload : foodid
    }
}

export {
    addToCart,
    delFromCart
}
