const cartKey = "cart";

export const getCart = () => {
    const cartString = localStorage.getItem(cartKey);
    return JSON.parse(cartString) || [];
}

export const addCart = (item) => {

}