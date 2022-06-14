import Cart from "../../components/LayoutClient/Cart"
import { reRender } from "../../helper/reRender"
const CartDetail = {
        render: () => {
                const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                let count = 0;
                return (`
                <h2 class="text-center my-5">Giỏ Hàng</h2>
                <div class="container">
    <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
            <tr>
                <th>Tên</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thao Tác</th>
            </tr>
        </thead>
        <tbody>
    ${ cartItems.map((item) => (
        `
        ${isNaN(item.sale_price) ? count += (Number(item.price) * item.value) : count += (Number(item.sale_price) * item.value)}
        <tr>
            <td>
                ${item.name}
            </td>
            <td>
                <span><i data-id="${item.id}" class="fas fa-caret-down"></i></span>
                <input data-id="${item.id}" value="${item.value}" style="width:60px" class="quantity"/>
                <span><i data-id="${item.id}" class="fas fa-caret-up"></i></span>
            </td>
            <td>
                <span>
                ${isNaN(item.sale_price) ? "" : `${(Number(item.sale_price) * item.value).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})} | `}
                </span>
                <span class="${isNaN(item.sale_price)  ? "" : "text-decoration-line-through text-danger"}">
                ${(Number(item.price) * item.value).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}
                </span>
            </td>
            <td>
                <button data-id="${item.id}" type="button" class="btn btn-danger">
                Xóa
                </button>
            </td>
        </tr>`
        )).join('')
    } 
        </tbody>
    </table>
    <div class="my-5">
    <h4 class="text-center">Tổng: ${count.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</h4>
    </div>
    </div>
    `)
    },
    afterRender: () => {
        const deleteCartBtns = document.querySelectorAll('.btn-danger');
        if(deleteCartBtns){
            deleteCartBtns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const itemId = btn.dataset.id;
                    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                    const newCartItems = cartItems.filter((item) => item.id !== itemId);
                    localStorage.setItem('cart', JSON.stringify(newCartItems));
                    reRender('#content', CartDetail);
                    reRender('#cart', Cart);
                })
            });
        }
        
        const upValue = document.querySelectorAll('.fa-caret-up');
        if(upValue){
            upValue.forEach((btn) => {
                const itemId = btn.dataset.id;
                const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                const existItem = cartItems.find((cartItem) => cartItem.id === itemId);
                existItem.value += 1;
                btn.addEventListener('click', () => {
                    localStorage.setItem('cart', JSON.stringify(cartItems));
                    reRender('#content', CartDetail);
                    reRender('#cart', Cart);
                })
            });
        }   

        const downValue = document.querySelectorAll('.fa-caret-down');
        if(downValue){
            downValue.forEach((btn) => {
                const itemId = btn.dataset.id;
                const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                const existItem = cartItems.find((cartItem) => cartItem.id === itemId);
                existItem.value -= 1;
                btn.addEventListener('click', () => {
                    if(existItem.value < 1){
                        const newCartItems = cartItems.filter((item) => item.id !== itemId);
                        localStorage.setItem('cart', JSON.stringify(newCartItems));
                    }else {
                        localStorage.setItem('cart', JSON.stringify(cartItems));
                    }
                    reRender('#content', CartDetail);
                    reRender('#cart', Cart);
                })
            });
        }

        const quantity = document.querySelectorAll('.quantity');
        if(quantity){
            quantity.forEach((btn) => {
                const itemId = btn.dataset.id;
                const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                const existItem = cartItems.find((cartItem) => cartItem.id === itemId);
                btn.addEventListener('change', () => {
                    if(btn.value < 1){
                        const newCartItems = cartItems.filter((item) => item.id !== itemId);
                        localStorage.setItem('cart', JSON.stringify(newCartItems));
                    }else {
                        existItem.value = Number(btn.value);
                        localStorage.setItem('cart', JSON.stringify(cartItems));
                    }
                    reRender('#content', CartDetail);
                    reRender('#cart', Cart);
                })
            });
        }

    }
}
export default CartDetail;