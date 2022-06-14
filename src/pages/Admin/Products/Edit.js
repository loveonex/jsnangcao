import { updateProduct, getProduct } from "../../../API/product";
import { getCategories } from "../../../API/category";
import router from "../../../helper/router";

const ProductEdit = {
        render: async(id) => {
                const response = await getProduct(id);
                const { data } = response;
                const categoriesStr = await getCategories();
                const categories = categoriesStr.data;

                return (
                        `<div>
                <h2 class="text-center my-5">Chỉnh Sửa Sản Phẩm</h2>
                <span id="error" class="text-danger">
                        </span>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên Sản Phẩm:</label>
                        <input type="text" id="name" value="${data.name}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Ảnh Sản Phẩm:</label>
                        <input type="text" id="avatar" value="${data.avatar}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Danh Mục:</label>
                        <select id="category" class="form-control">
                        ${ categories.map((cate) => (
                                `
                                <option value="${cate.id}" ${Number(data.id_category) == Number(cate.id) ? "selected" : ""}>${cate.name}</option>
                                `
                            )).join('')
                        }
                        </select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Giá:</label>
                        <input type="number" id="price" value="${data.price}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Giá Khuyến Mại:</label>
                        <input type="number" id="sale_price" value="${data.sale_price == null ? "" : data.sale_price}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Trạng Thái:</label>
                        <select id="status" class="form-control">
                            <option value="0" ${Number(data.status) == 0 ? "selected" : ""}>Hiển Thị</option>
                            <option value="1" ${Number(data.status) == 1 ? "selected" : ""}>Ẩn</option>
                        </select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Mô Tả</label>
                        <textarea rows="" cols="" class="form-control" id="description">${data.description}</textarea>
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" data-id="${data.id}">Sửa</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-primary');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const avatar = document.querySelector('#avatar').value
            const id_category = document.querySelector('#category').value;
            const price = document.querySelector('#price').value;
            let sale_price = document.querySelector('#sale_price').value;
            const status = document.querySelector('#status').value;
            const description = document.querySelector('#description').value;
            let error = document.querySelector('#error');
            if(!name || !avatar || !id_category || !price || !description){
                return error.innerHTML = "Vui Lòng Không Để Trống";
            }
            
            if(isNaN(Number(price))){
                return error.innerHTML = "Giá Phải Là Số";
            }

            if(sale_price){
                if(isNaN(Number(sale_price))){
                    return error.innerHTML = "Giá Phải Là Số";
                }
                if(Number(sale_price) > Number(price)){
                    return error.innerHTML = "Giá Phải Lớn Hơn Khuyến Mại";
                }
            }
            if(!sale_price){
                sale_price = null;
            }

            const submitData = { name, avatar, id_category, price, sale_price, status, description };
            await updateProduct(submitData, submitBtn.dataset.id);
            router.navigate('/admin/products');
        })
    }
}
export default ProductEdit;