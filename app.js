const products = [
    { id: 1, name: 'Ipad Pro', price: 10, image: 'https://hafeezcentreonline.pk/cdn/shop/products/Apple-iPad-Pro-12.9-inch-wi.jpg?v=1663962654' },
    { id: 2, name: 'Lenovo Laptop', price: 20, image: 'https://static3.webx.pk/files/19643/Images/lenovo-ideapad-1-15igl7-laptop-price-in-pakistan-4-19643-0-100124115926957.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7cdjgS.png' },
    { id: 4, name: 'Product 4', price: 40, image: 'https://img.lazcdn.com/g/p/38cc3532d9fa83798400b681741114d8.jpg_720x720q80.jpg' },
    { id: 5, name: 'Product 5', price: 50, image: 'https://zhmall.pk/wp-content/uploads/2023/07/ii-4.jpg' },
    { id: 6, name: 'Product 6', price: 60, image: 'https://static-01.daraz.pk/p/0bd829b1c47359e0ea9d1eb37537eff1.jpg' },
    { id: 7, name: 'Product 7', price: 70, image: 'https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_tab_s9_ultra_-_256gb_-_12gb_-_graphite_-_tejar_2.jpg' },
    { id: 8, name: 'Product 8', price: 80, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086370007' },
    { id: 9, name: 'Product 9', price: 90, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-103220-ps5-tt-pol-der-8b9cb0e7-db34-4b17-b3a5-dfccbde9eae9.png;maxHeight=455;maxWidth=815' },
    { id: 10, name: 'Product 10', price: 100, image: 'https://rgbcustompc.com/cdn/shop/files/SY-PCBuild-FrostNov2023.png?v=1703786732' },
    { id: 11, name: 'Product 11', price: 15, image: 'https://www.skygames.com.pk/wp-content/uploads/2022/11/fortnite-minty-legends-pack-ps4.png' },
    { id: 12, name: 'Product 12', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hQTUHIWxQBomwwJDm7o9l9Mq-UWgy8UfNg&s' },
    { id: 13, name: 'Product 13', price: 35, image: 'https://m.media-amazon.com/images/I/71d7UKkg6xL._AC_SL1500_.jpg' },
    { id: 14, name: 'Product 14', price: 45, image: 'https://m.media-amazon.com/images/I/61tl-Fi6-uL._AC_SL1500_.jpg' },
    { id: 15, name: 'Product 15', price: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21xR8i9LPTKJp8qBYagEmImA9w6Ep7Ix7mg&s' },
    { id: 16, name: 'Product 16', price: 65, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSX5iZDp4MFcKNqnbzeC9EoFbaaj-FScNog&s' },
    { id: 17, name: 'Product 17', price: 75, image: 'https://static3.webx.pk/files/821/Images/g9-821-559686-171220034242.jpg' },
    { id: 18, name: 'Product 18', price: 85, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0E_xsF9kRD-LDiToy_O8E2ruPxqPdQJZFw&s' },
    { id: 19, name: 'Product 19', price: 95, image: 'https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg' },
    { id: 20, name: 'Product 20', price: 105, image: 'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_npXwHYuAuabxaCdxYw56ouORuEsgAhrczzoCmEOz.jpg' }
];

function displayProducts(filteredProducts) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

function filterProducts(category) {
    let filteredProducts;
    if (category === 'low') {
        filteredProducts = products.filter(product => product.price < 25);
    } else if (category === 'medium') {
        filteredProducts = products.filter(product => product.price >= 25 && product.price <= 50);
    } else if (category === 'high') {
        filteredProducts = products.filter(product => product.price > 50);
    }
    displayProducts(filteredProducts);
    localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
}

function showAllProducts() {
    displayProducts(products);
    localStorage.removeItem('filteredProducts');
}

// Display all products initially
displayProducts(products);

// Check if there are any products stored in local storage
window.addEventListener('load', () => {
    const storedProducts = JSON.parse(localStorage.getItem('filteredProducts'));
    if (storedProducts) {
        displayProducts(storedProducts);
    }
});