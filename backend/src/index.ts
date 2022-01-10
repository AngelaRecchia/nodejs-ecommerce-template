import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app: Express = express();
const allowedOrigins = ['http://localhost:8080'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathData = "../data/";
const orderProduct = require(pathData + "order-product.json");
const order = require(pathData + "order.json");
const productCategory = require(pathData + "product-category.json");
const product = require(pathData + "product.json");
const user = require(pathData + "user.json");

function getProductById (id: string)  {
    return Array.from(product).find(prod => JSON.parse(JSON.stringify(prod)).id === id);
}

function getCategoryById (id: string) {
    return Array.from(productCategory).find(cat => JSON.parse(JSON.stringify(cat)).id === id);
}

app.get('/products', function (req, res) {
    let products = product
    
    if (req.query.name) products = products.filter((item: { name: String; }) => item.name == req.query.name)
    if (req.query.category) {
        const cat = productCategory.filter((item: {name: String} ) => item.name == req.query.category)[0]
        if (cat) products = products.filter((item: { categoryId: String; }) => item.categoryId == cat.id )
    }
    res.send(products);
});


app.get('/products/:orderId', function (req, res) {
    const orderId = req.params.orderId;
    let result = [];
    for (let op of orderProduct){
        if (op.orderId === orderId){
            result.push(getProductById(op.productId));
        }
    }
    res.send(result);
});

app.get('/categories', function (req, res) {
    res.send(productCategory)
})

app.post("/addOrder", function (req, res) {
    res.json(req.body);
})

app.post("/addOrderProduct", function (req, res) {
    res.json(req.body);
})

app.listen(8080);

console.log('E-commerce backend started!');

