// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigo from 'navigo';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Student from './pages/Students'

const router = new Navigo('/', { linksSelector: 'a' });

const render = async(content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#content").innerHTML = await content;
    document.querySelector("#footer").innerHTML = Footer.render();
}


router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
    '/students': () => render(Student.render()),
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