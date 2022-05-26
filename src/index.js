// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigo from 'navigo';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

const router = new Navigo('/', { linksSelector: 'a' });

function render(content) {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#content").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
}


router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
})

router.resolve();