import { getProduct } from "../API/product";

const ProductDetail = {
    render: async(id) => {
        const response = await getProduct(id);
        const { data } = response;
        return `
    <h2 class="text-center" style="margin-bottom: 50px">Thông Tin Sản Phẩm</h2>
    <div>
        <div>
            <p>ID: ${data.id}</p>
            <p>Tên Sản Phẩm: ${data.name}</p>
            <p>Mô Tả: ${data.description}</p>
            <p>Đơn Giá: ${Number(data.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</p>
            <p>Trạng Thái: ${data.status == 1 ? "Hiển Thị" : "Ẩn"}</p>
        </div>
    </div>
    `
    }
}

export default ProductDetail;