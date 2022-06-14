import { updateCategory, getCategory } from "../../../API/category";
import router from "../../../helper/router";

const CategoriesEdit = {
    render: async(id) => {
        const response = await getCategory(id);
        console.log(id);
        const { data } = response;

        return (
            `<div>
                <h2 class="text-center my-5">Chỉnh Sửa Danh Mục</h2>
                <span id="error" class="text-danger">
                        </span>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên Danh Mục</label>
                        <input type="text" id="name" value="${data.name}" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="">Trạng Thái:</label>
                        <select id="status" class="form-control">
                            <option value="1" ${Number(data.status) == 1 ? "selected" : ""}>Ẩn</option>
                            <option value="0" ${Number(data.status) == 0 ? "selected" : ""}>Hiển Thị</option>
                        </select>
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="button" data-id="${data.id}" class="btn btn-primary">Sứa</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-primary');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const status = document.querySelector('#status').value;
            let error = document.querySelector('#error');
            if (!name || !status) {
                return error.innerHTML = "Vui Lòng Không Để Trống";
            }

            const submitData = { name, status };
            await updateCategory(submitData, submitBtn.dataset.id);
            router.navigate('/admin/categories');
        })
    }
}
export default CategoriesEdit;