/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Cart.ts":
/*!*****************!*\
  !*** ./Cart.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_product_entity_1 = __webpack_require__(/*! ./entities/order-product.entity */ "./entities/order-product.entity.ts");
var order_entity_1 = __webpack_require__(/*! ./entities/order.entity */ "./entities/order.entity.ts");
var Cart = (function () {
    function Cart() {
        this.productOrders = [];
        this.products = [];
        this.order = new order_entity_1.Order();
    }
    Cart.prototype.getProductById = function (id) {
        return this.products.find(function (p) { return p.id === id; });
    };
    Cart.prototype.addProductToCart = function (product) {
        var op;
        if (this.productOrders.length == 0 || !this.productOrders.find(function (p) { return p.productId === product.id; })) {
            op = new order_product_entity_1.OrderProduct(this.order.id, product.id);
            op.quantity = 1;
            this.productOrders.push(op);
            this.products.push(product);
        }
        else if (this.productOrders.find(function (p) { return p.productId === product.id; })) {
            this.productOrders.find(function (p) { return p.productId === product.id; }).quantity++;
        }
    };
    Cart.prototype.removeProductFromCart = function (product) {
        if (this.productOrders.find(function (p) { return p.productId === product.id; })) {
            var op = this.productOrders.find(function (p) { return p.productId === product.id; });
            op.quantity--;
            if (op.quantity == 0) {
                this.productOrders = this.productOrders.filter(function (p) { return p.productId !== product.id; });
                this.products = this.products.filter(function (p) { return p !== product; });
            }
            return true;
        }
        return false;
    };
    Cart.prototype.makeOrder = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var rawResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch('http://localhost:8080/addOrder', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(this.order)
                        })];
                    case 1:
                        rawResponse = _a.sent();
                        return [2];
                }
            });
        }); })();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var rawResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch('http://localhost:8080/addOrderProduct', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(this.productOrders)
                        })];
                    case 1:
                        rawResponse = _a.sent();
                        return [2];
                }
            });
        }); })();
        var lista = "";
        var tot = 0;
        this.productOrders.forEach(function (po) {
            var parziale = _this.getProductById(po.productId).price * po.quantity;
            tot += parziale;
            lista += po.quantity + "\t" + _this.getProductById(po.productId).name + "\t\u20AC" + parziale + "\n";
        });
        alert("Sintesi dell'ordine n\u00B0 " + this.order.id + ":\n\n            Data: " + this.order.date.toLocaleString().substr(0, 9) + "\n\n\n            Prodotti acquistati:\n\n            " + lista + "\n\n            TOTALE:\t\u20AC" + tot + "\n            ");
    };
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ "./ProductList.ts":
/*!************************!*\
  !*** ./ProductList.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductList = (function () {
    function ProductList() {
    }
    ProductList.prototype.getProducts = function () {
        var result = [];
        return fetch("http://localhost:8080/products")
            .then(function (res) { return res.json(); })
            .then(function (res) { return res; });
    };
    ProductList.prototype.getCategories = function () {
        var result = [];
        return fetch("http://localhost:8080/categories")
            .then(function (res) { return res.json(); })
            .then(function (res) { return res; });
    };
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./entities/order-product.entity.ts":
/*!******************************************!*\
  !*** ./entities/order-product.entity.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderProduct = (function () {
    function OrderProduct(id, prodId) {
        this.orderId = id;
        this.productId = prodId;
    }
    return OrderProduct;
}());
exports.OrderProduct = OrderProduct;


/***/ }),

/***/ "./entities/order.entity.ts":
/*!**********************************!*\
  !*** ./entities/order.entity.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./util.ts");
var Order = (function () {
    function Order() {
        this.id = util_1.Util.generateRandomId();
        this.date = new Date();
    }
    return Order;
}());
exports.Order = Order;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __webpack_require__(/*! ./Cart */ "./Cart.ts");
var ProductList_1 = __webpack_require__(/*! ./ProductList */ "./ProductList.ts");
var catList = document.getElementById("categoryList");
var items = document.getElementById("foundItems");
var div = document.getElementById("items");
var pagination = document.getElementById("pagination");
var cart = new Cart_1.Cart();
var categoryList;
var products;
var temp;
var pageIndex = 0;
var badge = document.getElementsByClassName("badge")[0];
function getCategoryById(id) {
    return categoryList.find(function (cat) { return cat.id === id; }).name;
}
function getProductById(id) {
    return products.find(function (cat) { return cat.id === id; });
}
var productList = new ProductList_1.ProductList();
productList.getCategories().then(function (categories) {
    categoryList = categories;
    categories.forEach(function (cat) {
        catList.innerHTML += "\n            <li><a class=\"category\" href=\"#\">" + cat.name + "</a></li>\n        ";
    });
    catList.innerHTML += "\n        <button id=\"removeFilter\" style=\"display:none\">Annulla filtro</button>\n    ";
    var removeFilter = document.getElementById("removeFilter");
    removeFilter.onclick = function () {
        setInitialStatus();
    };
});
function incrementBadge(product) {
    var actualValue = parseInt(badge.innerHTML);
    badge.innerHTML = actualValue + 1 + "";
    cart.addProductToCart(product);
}
function decrementBadge(product) {
    if (cart.removeProductFromCart(product)) {
        var actualValue = parseInt(badge.innerHTML);
        badge.innerHTML = actualValue - 1 + "";
    }
}
productList.getProducts().then(function (prods) {
    products = prods;
    loadProducts(prods);
    var categs = document.getElementsByClassName("category");
    Array.from(categs).forEach(function (cat) {
        var c = cat;
        c.onclick = function () {
            filterProducts(c.innerHTML);
        };
    });
});
function loadProducts(prods) {
    var tot = prods.length;
    var itemsPerPage = 5;
    items.innerHTML = tot + " Items found";
    div.innerHTML = "";
    for (var i = pageIndex * itemsPerPage; i < pageIndex * itemsPerPage + itemsPerPage && i < prods.length; i++) {
        var pr = prods[i];
        div.innerHTML += "\n            <div class=\"product\">\n                <img class=\"product-image\" src=\"" + pr.imageUrl + "\"/>\n                <span id=\"description\">\n                    <h3 class=\"name\">" + pr.name + "</h3>\n                    <p><b>Category: </b>" + getCategoryById(pr.categoryId) + "</p>\n                </span>\n                <span id=\"purchase\">\n                    <h4 class=\"price\">\u20AC" + pr.price + "</h4>\n                    <button class=\"button add\" id=\"" + pr.id + "-a\">\n                        <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button class=\"button remove\" id=\"" + pr.id + "-r\">\n                        <i class=\"fa fa-minus\"></i>\n                    </button>\n                </span>\n            </div>\n        ";
    }
    pagination.innerHTML = "<a href=\"#\">&laquo;</a>";
    for (var i = 0; i < Math.ceil(tot / itemsPerPage); i++) {
        if (i == pageIndex) {
            pagination.innerHTML += "<a href=\"#\" class=\"active page\">" + (i + 1) + "</a>";
        }
        else {
            pagination.innerHTML += "<a href=\"#\" class=\"page\">" + (i + 1) + "</a>";
        }
    }
    pagination.innerHTML += "<a href=\"#\">&raquo;</a>";
    var pages = document.getElementsByClassName("page");
    Array.from(pages).forEach(function (page) {
        var p = page;
        p.onclick = function () {
            changePage(p);
        };
    });
    var add = document.getElementsByClassName("add");
    Array.from(add).forEach(function (el) {
        var e = el;
        var prodId = e.id.substr(0, e.id.length - 2);
        var prod = getProductById(prodId);
        e.onclick = function () {
            incrementBadge(prod);
        };
    });
    var rem = document.getElementsByClassName("remove");
    Array.from(rem).forEach(function (el) {
        var e = el;
        var prodId = e.id.substr(0, e.id.length - 2);
        var prod = getProductById(prodId);
        e.onclick = function () {
            decrementBadge(prod);
        };
    });
    var cartButton = document.getElementsByClassName("menutoggle")[0];
    cartButton.onclick = function () {
        cart.makeOrder();
    };
}
function filterProducts(category) {
    pageIndex = 0;
    temp = __spreadArrays(products).filter(function (pr) { return getCategoryById(pr.categoryId) === category; });
    loadProducts(temp);
    var removeFilter = document.getElementById("removeFilter");
    removeFilter.style.display = "inline";
}
function changePage(page) {
    var pages = document.getElementsByClassName("page");
    Array.from(pages).forEach(function (page) {
        var p = page;
        if (p.classList.contains("active")) {
            p.classList.remove("active");
        }
    });
    page.classList.add("active");
    pageIndex = parseInt(page.innerHTML) - 1;
    (temp.length == 0) ? loadProducts(products) : loadProducts(temp);
}
function setInitialStatus() {
    pageIndex = 0;
    temp = [];
    var removeFilter = document.getElementById("removeFilter");
    removeFilter.style.display = "none";
    loadProducts(products);
}


/***/ }),

/***/ "./util.ts":
/*!*****************!*\
  !*** ./util.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = (function () {
    function Util() {
    }
    Util.generateRandomString = function (len) {
        var result = '';
        for (var i = len; i > 0; i--) {
            result +=
                Util.vocabulary[Math.floor(Math.random() * Util.vocabulary.length)];
        }
        return result;
    };
    Util.generateRandomId = function () {
        var lengths = [8, 4, 4, 4, 12];
        var parts = [];
        lengths.map(function (n) { return parts.push(Util.generateRandomString(n)); });
        return parts.join("-");
    };
    Util.vocabulary = "0123456789abcdefghijklmnopqrstuvwxyz";
    return Util;
}());
console.log(Util.generateRandomId());


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map