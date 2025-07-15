const products = [
  {
    name: "Wireless Earbuds, IPX8",
    price: 89,
    image: "https://via.placeholder.com/100?text=Earbuds"
  },
  {
    name: "AirPods Max",
    price: 559,
    image: "https://via.placeholder.com/100?text=AirPods"
  },
  {
    name: "Bose BT Earphones",
    price: 289,
    image: "https://via.placeholder.com/100?text=Bose"
  },
  {
    name: "VIVEFOX Headphones",
    price: 39,
    image: "https://via.placeholder.com/100?text=VIVEFOX"
  }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">$${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(productName) {
  alert(`${productName} added to cart!`);
}
