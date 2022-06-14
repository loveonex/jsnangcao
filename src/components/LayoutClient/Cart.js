const Cart = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
        let cartItemValue = 0;
        cartItems.forEach(element => {
            cartItemValue += Number(element.value);
        });
        return `
        <a class="text-reset me-3" href="/cart">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger">${cartItemValue}</span>
        </a>
        `
    }
}
export default Cart;