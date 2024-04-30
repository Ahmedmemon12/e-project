const prod = [
    {
        id: '1',
        title: 'Taj Mahal - India',
        images: [
            'https://assets.editorial.aetnd.com/uploads/2011/06/taj-mahal-gettyimages-463924915.jpg?width=768',
            'https://mogulesque.com/wp-content/uploads/2020/02/36770716074_58c7f3613c_o-scaled-scaled.jpg',
            'https://static.toiimg.com/thumb/91955051/Taj-Mahal-India.jpg?width=1200&height=900'
        ],
        link: 'index.html',
        direction: 'North'
    },
    {
        id: '2',
        title: 'Machu Picchu - Peru',
        images: [
            'https://lp-cms-production.imgix.net/2020-10/500pxRF_16641625.jpg',
            'https://cdn.britannica.com/25/180725-050-03DE70E6/area-Machu-Picchu-Peru.jpg',
            'https://www.peruforless.com/blog/wp-content/uploads/2020/05/machu-picchu-ruins.jpg'
        ],
        link: 'index.html',
        direction: 'North'
    },
]
const ImageGallery = document.getElementById('gallery')
const preview = ImageGallery.childNodes[1]

function displayProducts(prod) {
    preview.innerHTML = null
    prod.forEach((data, ind) => {
        console.log(data)
        const card = `<li data-num="2">
            <img src="${data.images[0]}" alt="" class="img-gal">
            <div class="float-gallery-content">
                <div class="content uk-text-left">
                    <span class="highlight uk-block">App Store | Social Media</span>
                    <a href="#">${data.title}</a>
                </div>
                <a href='${data.link}' class="content-btn">
                    <button type="button">
                        &#8594;
                    </button>
                </a>
            </div>
        </li>`

        preview.innerHTML += card
    })
}
displayProducts(prod)
