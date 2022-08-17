/* const products = [
    {
    "createdAt": "2022-08-01T02:37:11.753Z",
    "name": "Shelly Rowe",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/196.jpg",
    "thumbnail": "http://loremflickr.com/640/480/sports",
    "price": 52301,
    "oldPrice": 96615,
    "description": "Est vero autem qui qui necessitatibus enim magni minus. Quia officiis qui iure ducimus. Odio nihil voluptas temporibus consequuntur rerum. Modi optio illo eaque est.",
    "email": "Maynard85@gmail.com",
    "id": "1"
    },
    {
    "createdAt": "2022-07-31T13:37:30.022Z",
    "name": "Tim Jones",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/601.jpg",
    "thumbnail": "http://loremflickr.com/640/480/sports",
    "price": 58682,
    "oldPrice": 48263,
    "description": "Sit id mollitia perferendis. Vel quia fugit sint laboriosam. Error enim ullam sit libero. Porro doloremque fugit mollitia illum.",
    "email": "Celestino_Ebert52@yahoo.com",
    "id": "2"
    },
    {
    "createdAt": "2022-07-31T14:32:07.841Z",
    "name": "Terrance Kertzmann",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/791.jpg",
    "thumbnail": "http://loremflickr.com/640/480/animals",
    "price": 49386,
    "oldPrice": 7078,
    "description": "Ut quam dolor et possimus. Voluptatem aut totam vitae et aperiam corrupti soluta. Fugit facere et quaerat rerum. Rem ut temporibus ut est vel recusandae.",
    "email": "Jannie18@gmail.com",
    "id": "3"
    },
    {
    "createdAt": "2022-08-01T05:03:58.942Z",
    "name": "Terrence Collier",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/261.jpg",
    "thumbnail": "http://loremflickr.com/640/480/people",
    "price": 73048,
    "oldPrice": 25111,
    "description": "Quis aspernatur hic distinctio qui nam aliquid. Eum consequatur quibusdam quasi nihil facilis nesciunt possimus. Et ut doloremque minima ut eveniet asperiores culpa doloribus at. Repudiandae saepe nesciunt sequi maxime inventore hic ipsam. Sint ut odio laboriosam eius officiis accusantium molestiae eligendi.",
    "email": "Zola_Kautzer0@gmail.com",
    "id": "4"
    },
    {
    "createdAt": "2022-07-31T15:11:29.032Z",
    "name": "Israel Hilll",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1112.jpg",
    "thumbnail": "http://loremflickr.com/640/480/animals",
    "price": 78332,
    "oldPrice": 71328,
    "description": "Dicta corrupti et adipisci sed asperiores eaque sunt. Quasi occaecati recusandae accusantium. Animi incidunt non eos molestiae consequuntur nam velit harum.",
    "email": "Will46@gmail.com",
    "id": "5"
    },
    {
    "createdAt": "2022-07-31T22:02:55.915Z",
    "name": "Charlie Schowalter",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/132.jpg",
    "thumbnail": "http://loremflickr.com/640/480/transport",
    "price": 19836,
    "oldPrice": 82378,
    "description": "Non architecto fugit vitae beatae asperiores qui et itaque et. Atque id fugiat. Reprehenderit et molestias. Sequi sint qui nihil corrupti molestiae. Quaerat modi quos dicta quod vel rem. Asperiores aut doloremque.",
    "email": "Estelle.Fritsch43@hotmail.com",
    "id": "6"
    },
    {
    "createdAt": "2022-07-31T20:46:56.388Z",
    "name": "Carrie Cormier",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
    "thumbnail": "http://loremflickr.com/640/480/nightlife",
    "price": 17437,
    "oldPrice": 33355,
    "description": "Minus quidem excepturi. Voluptatem et ut. Cumque sed sit dicta repellendus molestias ipsum. Officia assumenda voluptas modi. Alias et voluptatem. Sit aliquam quas inventore dicta.",
    "email": "Oma_Funk@gmail.com",
    "id": "7"
    },
    {
    "createdAt": "2022-07-31T16:16:24.571Z",
    "name": "Roman Anderson",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/63.jpg",
    "thumbnail": "http://loremflickr.com/640/480/fashion",
    "price": 45799,
    "oldPrice": 42294,
    "description": "Rem hic omnis nobis. Et temporibus magnam amet. Aliquid voluptate et mollitia consequatur dicta qui. Natus sunt et ipsam enim saepe. Adipisci aut rerum similique voluptatum nobis.",
    "email": "Alejandrin.Rowe@hotmail.com",
    "id": "8"
    },
];
*/
function makeHtml(products){
    return `
    <!-- Card  -->
    <div class="col-md-4">
        <div class="card product mt-3">
            <div class="product1 align-items-center p-2 text-center">
                <img src=${products.thumbnail} alt="laptop" class="rounded" width="160">
                <h5>${products.name}</h5>
                <!-- Card Info -->
                <div class="info mt3">
                    <span class="text1 d-block">${products.description}</span>
                </div>
                <div class="cost mt-3 text-dark">
                    <span>Rs.${products.price}</span>
                    <s><span style="color:grey;">Rs.${products.oldPrice}</span></s>
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

const fetchData = ()=>{
    fetch("https://62bd8db5c5ad14c110c16cc2.mockapi.io/product",{method:"get",})
    .then((data)=>{
        if(data.ok){
            return data.json();
        }else{
            throw data;
        }
    })
    .then((data)=>{
            const productRow = document.getElementById("productRow");
            let productHtml = "";
            for(let i=0;i<data.length;i++){
                productHtml += makeHtml(data[i]);
            }
            productRow.innerHTML = productHtml;
    })
    .catch((error)=>{
        console.log(error);
    })
}
fetchData();

/*
const productRow = document.getElementById("productRow");
let productHtml = "";
for(let i=0;i<products.length;i++){
    productHtml += makeHtml(products[i]);
}
productRow.innerHTML = productHtml;
*/