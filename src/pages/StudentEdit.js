import { editStudent, getStudent } from "../API/student";

const StudentEdit = {
    render: async(id) => {
        const response = await getStudent(id);
        const { data } = response;

        return (
            `<div>
                <h2 class="text-center" style="margin-bottom: 50px">Chỉnh Sửa Sinh Viên</h2>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên:</label>
                        <input type="text" id="name" value="${data.name}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">MSV:</label>
                        <input type="text" id="id_stu" value="${data.id_stu}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Avatar:</label>
                        <input type="file" id="avatar" class="form-control"/>
                        <br>
                        <img src="${data.avatar}" alt="">
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
            const id_stu = document.querySelector('#id_stu').value;
            const avatar = document.querySelector('#avatar').value;

            const submitData = { name, id_stu, avatar };
            await editStudent(submitData, submitBtn.dataset.id);
            window.location.replace('/students');
        })
    }
}
export default StudentEdit;