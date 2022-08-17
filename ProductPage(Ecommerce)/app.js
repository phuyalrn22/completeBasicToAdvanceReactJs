const product = {
        "createdAt": "2022-08-01T02:37:11.753Z",
        "name": "Shelly Rowe",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/196.jpg",
        "thumbnail": "http://loremflickr.com/640/480/sports",
        "price": 52301,
        "oldPrice": 96615,
        "description": "Est vero autem qui qui necessitatibus enim magni minus. Quia officiis qui iure ducimus. Odio nihil voluptas temporibus consequuntur rerum. Modi optio illo eaque est.",
        "email": "Maynard85@gmail.com",
        "id": "1"
};
function makeHtml(peoduct){
    return `
    <!-- Card  -->
    <div class="col-md-4">
        <div class="card product mt-3">
            <div class="product1 align-items-center p-2 text-center">
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
            <div class="p-3 shoe text-center text-white mt-3-cursor">
                <span class="text-uppercase">
                    Add to cart
                </span>
            </div>
        </div>
    </div>
    <!-- Card  End Here -->
    `;
}
const productRow = document.getElementById("productRow");
productRow.innerHTML = makeHtml(product);