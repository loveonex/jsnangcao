import tintuc from '../news-data';

const News = {
        render: async() => {
                const response = await fetch('https://6291d18f9d159855f08095e4.mockapi.io/news');
                const news = await response.json();

                return `
        <h2 class="text-center" style="margin-bottom: 50px">Tin Tức</h2>
        <div class="row">
            ${news.map((n) => (
                `<div class="col-3" style="max-width:322px;">
                    <p>${n.title}</p>
                    <img src="${n.image}" alt="">
                    <p>${n.content}</p>
                </div>
                `
            )).join('')}
        </div>
        `
    }
}

export default News;