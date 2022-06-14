import { getProduct } from "../../API/product";
import Cart from "../../components/LayoutClient/Cart";
import { reRender } from "../../helper/reRender";

const ProductDetail = {
        render: async(id) => {
                const response = await getProduct(id);
                const { data } = response;
                return `
        <div class="container">
    <h2 class="text-center" style="margin-bottom: 50px">Thông Tin Sản Phẩm</h2>
    <div class="d-flex align-items-start bg-light mb-3 row p-5">
        <div class="col-6">
            <img src="${data.avatar}" width="300px"/>
        </div>
        <div class="col-6">
            <h3>${data.name}</h3>
            <p>Đơn Giá: 
                <span>
                ${data.sale_price == null ? "" : `${Number(data.sale_price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})} | `}
                </span>
                <span class="${data.sale_price == null ? "" : "text-decoration-line-through text-danger"}">
                ${Number(data.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}
                </span>
                </p>
            <div>
                <input type-'number' id='cartValue' value='1' min='1' style="width:60px"/>
                <button
                    class="btn btn-infor"
                    data-id="${data.id}"
                    data-name="${data.name}"
                    data-price="${data.price}"
                    data-saleprice="${data.sale_price}"
                    id="btn-add-cart"
                > Thêm vào giỏ hàng</button>
            </div>
        </div>
        <div class="d-flex justify-content-center my-5">
            <h3 class="text-center">Mô Tả</h3>
        </div>
        <p class="col-md-9 d-flex justify-content-center">${data.description}</p>
    </div>
    </div>
    `
    },
    afterRender: () => {
        const btnAddCart = document.querySelector('#btn-add-cart');
        btnAddCart.addEventListener('click', () => {
            const item = {
                id: btnAddCart.dataset.id,
                name: btnAddCart.dataset.name,
                price: btnAddCart.dataset.price,
                sale_price: btnAddCart.dataset.saleprice,
                value: +document.querySelector('#cartValue').value || 1
            }

            const cartItemsSrting = localStorage.getItem('cart');
            const cartItems = JSON.parse(cartItemsSrting || '[]')

            if (!cartItems.length) {
                cartItems.push(item);
            } else {
                const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
                if (existItem) {
                    existItem.value += item.value;
                } else {
                    cartItems.push(item);
                }
            }
            localStorage.setItem('cart', JSON.stringify(cartItems));
            reRender('#cart', Cart);
        })
    }
}

export default ProductDetail;