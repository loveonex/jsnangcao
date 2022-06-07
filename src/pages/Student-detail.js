import { getStudent } from "../API/student";

const StudentDetail = {
    render: async(id) => {
        const response = await getStudent(id);
        const { data } = response;
        return `
    <h2 class="text-center" style="margin-bottom: 50px">Thông Tin Sinh Viên</h2>
    <div>
        <div>
            <p>ID: ${data.id}</p>
            <p>Mã Sinh Viên: ${data.id_stu}</p>
            <p>Tên Sinh Viên: ${data.name}</p>
            <p>Ảnh:<br><img src="${data.avatar}"></p>
        </div>
    </div>
    `
    }
}

export default StudentDetail;