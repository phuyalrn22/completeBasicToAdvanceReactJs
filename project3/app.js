
function makeHtml(product){
    return `
    <div class="col-sm-4 mb-3">
                <div class="card mt-4" style="width: 22rem;">
                    <img class="card-img-top" src=${product.thumbnail} alt="Avatar">
                    <div class="card-body">
                        <h5 class="card-title text-info">${product.name}</h5>
                        <p class="card-text">${product.email}</p>
                        <p class="card-text"> ${product.price}</p>
                        <p class="card-text"> ${product.oldPrice}</p>
                        <p class="card-text"> ${product.description}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
    `;
}
const fetchData = () => {
    fetch("https://62bd8db5c5ad14c110c16cc2.mockapi.io/product",{
    method: "get",
    })
    .then((data) => {
        if (data.ok) {
            return data.json();
        }else{
            throw data;
        }
    })
    .then((data) => {
        const productRow = document.getElementById("productRow");
        let productsHtml = "";
        for (let i=0; i<data.length; i++){
            console.log(data[i]);
            productsHtml += makeHtml(data[i]);
        }
        productRow.innerHTML = productsHtml;
    })
    .catch((err) => {
        console.log(err);
    });
};
fetchData();