import { getCategories, deleteCategory, updateCategory } from "../../../API/category";
import ContentAdmin from "../../../components/LayoutAdmin/ContentAdmin";
import { reRender } from "../../../helper/reRender";
const CategoriesList = {
        render: async() => {
                const response = await getCategories();
                const { data } = response;
                return `
        <h2 class="text-center my-5">Danh Sách Danh Mục</h2>
        <a href="categories/add" class="btn btn-success">
        Thêm mới
        </a>
        <br>
        <br>
        <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Trạng Thái</th>
                    <th colspan="2">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
            ${data.map((category) => (
                `
                    <tr>
                        <td>
                            ${category.id}
                        </td>
                        <td>
                            ${category.name}
                        </td>
                        <td>
                            <span data-id="${category.id}" id="${Number(category.status) == 0 ? "block" : "hidden"}" class="badge badge-${Number(category.status) == 0 ? "success" : "danger"} rounded-pill d-inline fs-6 text" style="cursor:pointer">${Number(category.status) == 0 ? "Hiển thị" : "Ẩn"}</span>
                        </td>
                        <td>
                            <a href="categories/edit/${category.id}" class="btn btn-primary">
                                <i class="fas fa-pen-fancy"></i>
                            </a>
                            <button type="button" data-id="${category.id}" class="btn btn-danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                `
            )).join('')}

            </tbody>
        </table>`
    },
    afterRender: () => {
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            const data = btn.dataset;
            btn.addEventListener('click', async () => {
                await deleteCategory(data.id);
                reRender('#content', ContentAdmin, undefined, CategoriesList)
            });
        });

        const statusBtns1 = document.querySelectorAll('#hidden');
        statusBtns1.forEach((btn) => {
            const dataSubmit = { status: 0 }
            const data = btn.dataset;
            btn.addEventListener('click', async() => {
                await updateCategory(dataSubmit, data.id);
                reRender('#content', ContentAdmin,undefined, CategoriesList);
            });
        });

        const statusBtns2 = document.querySelectorAll('#block');
        statusBtns2.forEach((btn) => {
            const dataSubmit = { status: 1 }
            const data = btn.dataset;
            btn.addEventListener('click', async() => {
                await updateCategory(dataSubmit, data.id);
                reRender('#content', ContentAdmin,undefined, CategoriesList);
            });
        });
    },
    
}

export default CategoriesList;