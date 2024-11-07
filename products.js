const products = [
  {
    id: 1,
    name: "smart phone",
    type: "phone",
    price: 20.99,
    image: "./images/products/1.webp",
  },
  {
    id: 2,
    name: "Sony MDRZX310W",
    type: "Headphone",
    price: 30.99,
    image: "./images/products/2.webp",
  },
  {
    id: 3,
    name: "nokia phone",
    type: "phone",
    price: 15,
    image: "./images/products/3.webp",
  },
  {
    id: 4,
    name: "apoo T8 White",
    type: "mouse",
    price: 100.99,
    image: "./images/products/4.webp",
  },
  {
    id: 5,
    name: "Canon EF",
    type: "Camera",
    price: 200.99,
    image: "./images/products/5.webp",
  },
  {
    id: 6,
    name: "Transcend T.Sonic",
    type: "phone",
    price: 25,
    image: "./images/products/6.webp",
  },
  {
    id: 7,
    name: "Beoplay",
    type: "Headphone",
    price: 375,
    image: "./images/products/7.webp",
  },
  {
    id: 8,
    name: "smart watch",
    type: "watch",
    price: 42,
    image: "./images/products/8.webp",
  },
  {
    id: 9,
    name: "Wireless Headphone",
    type: "Headphone",
    price: 40.99,
    image: "./images/products/9.webp",
  },
  {
    id: 10,
    name: "sapoo T8 Black",
    type: "mouse",
    price: 14,
    image: "./images/products/10.webp",
  },
  {
    id: 11,
    name: "wire Headphone",
    type: "Headphone",
    price: 19.99,
    image: "./images/products/11.webp",
  },
  {
    id: 12,
    name: "Luna Smartphone",
    type: "phone",
    price: 8,
    image: "./images/products/12.webp",
  },
  {
    id: 13,
    name: "smart watch",
    type: "watch",
    price: 48,
    image: "./images/products/13.webp",
  },
  {
    id: 14,
    name: "PlayStation",
    type: "gaming",
    price: 5000,
    image: "./images/products/14.webp",
  },
  {
    id: 15,
    name: "Control shield",
    type: "gaming",
    price: 1000,
    image: "./images/products/15.webp",
  },
  {
    id: 16,
    name: "Huawei MediaPad",
    type: "tablet",
    price: 208.99,
    image: "./images/products/16.webp",
  },
];





// Select both product containers
const firstProductsContainer = document.querySelector('.products'); // First section
const secondProductsContainer = document.querySelector('#deals .products'); // Second section

// Function to generate product HTML
function generateProductHTML(product) {
  return `
      <div class="proBox">
          <div class="content">
              <span class="discount">-25%</span>
              <img src="${product.image}" alt="${product.name}">
              <div class="text">
                  <small>$${product.price.toFixed(2)}</small>
                  <span>${product.type}</span>
                  <strong>${product.name}</strong>
              </div>
                <button class="btn" id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      </div>
  `;
}




// Function to create rows of products
function createRows(productsArray, startIndex) {
  let rowsHTML = '';
  for (let i = startIndex; i < startIndex + 8; i += 4) {
    rowsHTML += '<div class="row">';
    for (let j = i; j < i + 4; j++) {
      if (products[j]) { // Check if the product exists
        rowsHTML += generateProductHTML(products[j]);
      }
    }
    rowsHTML += '</div>'; // Close the row
  }
  return rowsHTML;
}


firstProductsContainer.innerHTML = createRows(products, 0); // First 8 products
secondProductsContainer.innerHTML = createRows(products, 8); // Next 8 products (8-16)

function generateProductHTML(product) {
  return `
      <div class="proBox">
          <div class="content">
              <span class="discount">-25%</span>
              <img src="${product.image}" alt="${product.name}">
              <div class="text">
                  <small>$${product.price.toFixed(2)}</small>
                  <span>${product.type}</span>
                  <strong>${product.name}</strong>
              </div>
              <button class="btn" id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      </div>
  `;
}
function generateTrendProductHTML(product) {
  return `
       <div class="box swiper-slide">
            <div class="content">
                <a class="heart" id="13"><i class="fa-solid fa-heart"></i>
                </a>
                <div class="image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <p class="text-gray-500 text-sm">${product.type}</p>
                <div class="space">
                    <p>${product.name}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
  `;
}

// Function to populate trends
function populateTrends(productsArray) {
  const trendContainer = document.querySelector('.trand-boxs');
  let trendHTML = ``;

  for (let i = 7; i < 16; i++) {
    if (productsArray[i]) {
      trendHTML += generateTrendProductHTML(productsArray[i]);
    }
  }

  trendContainer.innerHTML = trendHTML;
}

populateTrends(products);

// Function to add product to the cart
function addToCart(productId) {
  let product = findProductById(productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  let existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.count += 1; // Increase count if already in cart
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      image: product.image,
      count: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay(cart);
}

// Function to find product by ID
function findProductById(productId) {
  return products.find(product => product.id === productId);
}

function toggleCart(productId, button) {
  addToCart(productId);

  button.innerHTML = 'remove';
  button.style.backgroundColor = 'red';

  button.disabled = true;
}

// Function to update cart display
function updateCartDisplay(cart) {
  const cartCount = document.querySelector('.zero');
  const cartTotal = document.querySelector('.num');

  let totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  let totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  cartCount.innerHTML = totalItems;
  cartTotal.innerHTML = `$${totalPrice.toFixed(2)}`;

  localStorage.setItem('cartCount', totalItems);
  localStorage.setItem('cartTotal', totalPrice.toFixed(2));
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const savedCount = localStorage.getItem('cartCount') || 0;
  const savedTotal = localStorage.getItem('cartTotal') || "$0.00";
  updateCartDisplay(cart);

  document.querySelector('.zero').innerHTML = savedCount;
  document.querySelector('.num').innerHTML = savedTotal;

  // Attach toggleCart function to all add buttons
  const buttons = document.querySelectorAll('.add-to-cart-button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.dataset.productId);
      toggleCart(productId, this);
    });
  });
});




function addToWishlist(productId) {
  let product = findProductById(productId);
  if (!product) return;

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the product is already in the wishlist
  let existingProduct = wishlist.find(item => item.id === product.id);
  if (!existingProduct) {
    wishlist.push({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      image: product.image,
    });
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistDisplay(wishlist);
}

// Function to update wishlist display
function updateWishlistDisplay(wishlist) {
  const wishlistBody = document.getElementById('wishlist-body');
  wishlistBody.innerHTML = ''; // Clear existing items

  if (wishlist.length === 0) {
    document.getElementById('empty-wishlist').style.display = 'block';
    document.getElementById('wishlist-container').style.display = 'none';
  } else {
    document.getElementById('empty-wishlist').style.display = 'none';
    document.getElementById('wishlist-container').style.display = 'block';

    wishlist.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;">
          <span>${item.name}</span>
        </td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <button class="remove-from-wishlist" data-product-id="${item.id}">Remove</button>
        </td>
      `;
      wishlistBody.appendChild(row);
    });

    // Attach remove functionality
    const removeButtons = document.querySelectorAll('.remove-from-wishlist');
    removeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productId = parseInt(this.dataset.productId);
        removeFromWishlist(productId);
      });
    });
  }
}

function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(item => item.id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistDisplay(wishlist);
}

// Event listener for adding to wishlist
document.addEventListener('DOMContentLoaded', () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  updateWishlistDisplay(wishlist);

  // Attach addToWishlist function to all heart buttons
  const heartButtons = document.querySelectorAll('.heart');
  heartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.dataset.productId);
      addToWishlist(productId);
    });
  });
});
