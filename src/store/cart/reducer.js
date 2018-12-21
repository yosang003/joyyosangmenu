const initstate = {
    cartlist:[]
}
function todoCart(state = initstate, action) {
    let localcart = localStorage.getItem('carts');//这里得到的是一个字符串
    let carts = [...state.cartlist];

    switch (action.type) {
        case 'ADDTOCART':
            //将新增的购物车数据存入localstorage中，先判断是否有cart对象
            localcar1.push(action.payload);
            localStorage.setItem('carts',JSON.stringify(localcar1));
            carts.push(action.payload)
            return {
                ...state,
                cartlist:carts
            };
        case 'DELFROMCART':
            //从localstorage中删除数据
            let index = carts.findIndex(element => {
               return element.id == action.playload;

            });
            localcar1.splice(index,1)
            localStorage.setItem('carts',JSON.stringify(localcar1));
            carts.splice(index,1);
            return {
                ...state,
                cartlist:carts
            }

        default :
            console.log('11')
            return state;
    }
}

function updateCartTolocalstorage(state){

}


export default  todoCart;
