import tintuc from '../news-data';

const News = {
        render: () => (
                `
        <h2 class="text-center" style="margin-bottom: 50px">Tin Tức</h2>
        <div class="row">
            ${tintuc.map((tin) => (
                `<div class="col-3" style="max-width:322px;">
                    <h3 class="text-center">${tin.title}</h3>
                    <img src="${tin.image}" alt="" style="width:322px; height:500px">
                    <br>
                    <br>
                    <p>${tin.content}</p>
                </div>`
            ))}
        </div>
    `
    )
};

export default News;