import { Cart } from "./Cart";
import { ProductCategory } from "./entities/product-category.entity";
import { Product } from "./entities/product.entity";
import { ProductList } from "./ProductList";

const catList = document.getElementById("categoryList");
const items = document.getElementById("foundItems");
const div = document.getElementById("items");
const pagination = document.getElementById("pagination");
const cart: Cart = new Cart();
const searchText = document.getElementById('seachText');

let categoryList: ProductCategory[];
let products: Product[];
let temp: Product[];
let pageIndex = 0;
const badge = document.getElementsByClassName("badge")[0];

function getCategoryById  (id:string)  {
    return categoryList.find(cat => cat.id === id).name;
}

function getProductById  (id:string)  {
    return products.find(cat => cat.id === id);
}

let productList:ProductList = new ProductList();

productList.getCategories().then(categories => {
    categoryList = categories;
    catList.innerHTML = '<li><a class="category" href="#">All</a></li>'
    categories.forEach(cat => {
        catList.innerHTML += `
            <li><a class="category" href="#">${cat.name}</a></li>
        `
    });
})

function incrementBadge(product: Product){
    const actualValue = parseInt(badge.innerHTML);
    badge.innerHTML = actualValue+1+"";
    cart.addProductToCart(product);
}

function decrementBadge(product: Product){
    if (cart.removeProductFromCart(product)){
        const actualValue = parseInt(badge.innerHTML);
        badge.innerHTML = actualValue-1+"";
    }
}

productList.getProducts().then(prods => {
    products = prods;
    loadProducts(prods);
    const categs = document.getElementsByClassName("category");
    Array.from(categs).forEach(cat => {
        const c = cat as HTMLElement;
        c.onclick = function(){
            filterProducts(c.innerHTML);
        }
    });
});

function loadProducts(prods: Product[]){
    const tot = prods.length;
    const itemsPerPage = 5;
    items.innerHTML = `${tot} Items found`;
    div.innerHTML = "";
    for (let i=pageIndex*itemsPerPage; i<pageIndex*itemsPerPage + itemsPerPage && i<prods.length; i++) {
        let pr = prods[i];
        div.innerHTML += `
            <div class="box d-flex my-3">
                
                <div class="prod-details d-flex col">
                    <img class="product-image" src="${pr.imageUrl}"/>
                    <div class="ms-3">
                        <h4 class="name">${pr.name}</h4>
                        <div class="rating">
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star lightgrey"></i>
                        </div>

                        <div class="description">
				            Accusantium voluptatum aliquam veritatis officiis consequatur consectetur molestias quod libero aliquid provident inventore architecto error nobis ipsa quaerat.
                        </div>
                    </div>
                </div>

                <div class="vert-line mx-2"></div>

                <div id="purchase" class="col-3 flex-shrink-0">
                    <h5 class="price">€${pr.price}</h5>
                    <div class="text-success">Free Shipping</div>

                    <div class="d-grid gap-2 my-3">
                        <button class="btn btn-primary text-center" type="button">Details</button>
                        <button class="btn btn-light text-center" type="button"><i class="fas fa-heart mx-2"></i>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        `
    }
    pagination.innerHTML = `<a href="#">&laquo;</a>`;
    for (let i=0; i< Math.ceil(tot/itemsPerPage); i++){
        if (i == pageIndex){
            pagination.innerHTML += `<a href="#" class="active page">${i+1}</a>`
        }
        else {
            pagination.innerHTML += `<a href="#" class="page">${i+1}</a>`
        }
    } 
    pagination.innerHTML += `<a href="#">&raquo;</a>`;
    const pages = document.getElementsByClassName("page");
    Array.from(pages).forEach(page => {
        const p = page as HTMLElement;
        p.onclick = function(){
            changePage(p);
        }
    });

    const add = document.getElementsByClassName("add");
    Array.from(add).forEach(el => {
        const e = el as HTMLElement;
        const prodId = e.id.substr(0,e.id.length-2);
        const prod = getProductById(prodId);
        e.onclick = function(){
            incrementBadge(prod);
        }
    });

    const rem = document.getElementsByClassName("remove");
    Array.from(rem).forEach(el => {
        const e = el as HTMLElement;
        const prodId = e.id.substr(0,e.id.length-2);
        const prod = getProductById(prodId);
        e.onclick = function(){
            decrementBadge(prod);
        }
    });

    const cartButton = document.getElementsByClassName("menutoggle")[0] as HTMLElement;
    cartButton.onclick = function(){
        cart.makeOrder();
    }
}

document.getElementById('searchText').addEventListener('keyup', (e) => {
    loadProducts(products.filter(prod => prod.name.includes(e.path[0].value)))
})

function filterProducts(category: string){
    pageIndex = 0;
    if (category == 'All') return loadProducts(products)
    temp = [...products].filter(pr => getCategoryById(pr.categoryId) === category);
    loadProducts(temp);
}

function changePage(page: HTMLElement){
    const pages = document.getElementsByClassName("page");
    Array.from(pages).forEach(page => {
        const p = page as HTMLElement;
        if (p.classList.contains("active")){
            p.classList.remove("active");
        }
    });
    page.classList.add("active");
    pageIndex = parseInt(page.innerHTML)-1;
    (temp.length == 0) ? loadProducts(products) : loadProducts(temp);
}

function setInitialStatus(){
    pageIndex = 0;
    temp = [];
    loadProducts(products);
}