// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigo from 'navigo';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Student from './pages/Students'
import StudentDetail from './pages/Student-detail'
import StudentAdd from './pages/StudentAdd';
import Product from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import StudentEdit from './pages/StudentEdit';
import ProductEdit from './pages/ProductEdit';

const router = new Navigo('/', { linksSelector: 'a' });

export const render = async(content, id) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#content").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();


    if (content.afterRender) {
        content.afterRender();
    }

}

router.on({
    '/': () => render(Home),
    '/about': () => render(About),
    '/news': () => render(News),

    '/students': () => render(Student),
    '/students/add': () => render(StudentAdd),
    '/students/detail/:id': ({ data }) => render(StudentDetail, data.id),
    '/students/edit/:id': ({ data }) => render(StudentEdit, data.id),

    '/products': () => render(Product),
    '/products/add': () => render(ProductAdd),
    '/products/detail/:id': ({ data }) => render(ProductDetail, data.id),
    '/products/edit/:id': ({ data }) => render(ProductEdit, data.id),
})

router.resolve();

// const setValueA = () => new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve([1, 2, 3]);
//         } else {
//             reject('bị lỗi');
//         }
//         // a = [1, 2, 3];
//     }, 1000);
// });

// const printA = async() => {
//     const result = await setValueA();
//     console.log('chờ result nhận kết quả rồi mới chạy log này:', result);
//     result.push(4);
//     console.log('sau khi thực hiện push ra kq này:', result);
// }

// printA();