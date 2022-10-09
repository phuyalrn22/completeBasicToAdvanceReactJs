let cartCount = 0;
const cartItem = document.getElementById("cartItem");
cartItem.innerHTML = cartCount;
let cartItems = [];

function makeHtml(product) {
  return ` 
  <div class="col-md-4">
                <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                        <img src=${product.thumbnail} alt="laptop" class="rounded" width="160">
                        <h5>${product.name}</h5>
                        <!-- Card Info -->
                        <div class="info mt3">
                            <span class="text1 d-block">${product.description}</span>
                        </div>
                        <div class="cost mt-3 text-dark">
                            <span>Rs.${product.price}</span>
                            <div class="star mt-3 align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Card info end here -->
                    <!-- Button For Card -->
                    <button class="p-3 shoe text-center text-white mt-3-cursor "  onclick="
                      changeCart(${product.id})" >
                        <span class="text-uppercase">
                            Add to cart
                        </span>
                    </button>
                </div>
            </div>
    `;
}

const fetchData = () => {
  fetch("https://62bd8db5c5ad14c110c16cc2.mockapi.io/product", {
    method: "get",
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw data;
      }
    })
    .then((data) => {
      productList = data;
      const productRow = document.getElementById("productRow");
      let productsHtml = "";
      for (let i = 0; i < data.length; i++) {
        productsHtml += makeHtml(data[i]);
      }
      productRow.innerHTML = productsHtml;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchData();

//  cart actions

const changeCart = (product) => {
  const existCart = cartItems.includes(product);
  // const existCart = cartItems.filter((x) => x === product);
  // if (existCart.length > 0) {
  if (existCart) {
    cartItems = cartItems.filter((x) => x !== product);
    cartCount--;
  } else {
    cartCount++;
    cartItems.push(product);
  }
  cartItem.innerHTML = cartCount;
};
