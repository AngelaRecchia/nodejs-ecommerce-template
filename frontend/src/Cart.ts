import { OrderProduct } from "./entities/order-product.entity";
import { Order } from "./entities/order.entity";
import { Product } from "./entities/product.entity";

export class Cart {
    
    productOrders: OrderProduct[] = [];
    order: Order;
    products: Product[] = [];

    constructor(){
        this.order = new Order();
    }

    getProductById  (id:string)  {
        return this.products.find(p => p.id === id);
    }

    addProductToCart(product: Product){
        let op: OrderProduct;
        if (this.productOrders.length == 0 || !this.productOrders.find(p => p.productId === product.id)){
            op = new OrderProduct(this.order.id, product.id);
            op.quantity = 1;
            this.productOrders.push(op);
            this.products.push(product);
        }
        else if (this.productOrders.find(p => p.productId === product.id)){
            this.productOrders.find(p => p.productId === product.id).quantity ++;
        }
    }

    removeProductFromCart(product: Product){
        if (this.productOrders.find(p => p.productId === product.id)){
            let op = this.productOrders.find(p => p.productId === product.id);
            op.quantity--;
            if (op.quantity == 0){
                this.productOrders = this.productOrders.filter(p => p.productId !== product.id);
                this.products = this.products.filter(p => p !== product);
            }
            return true;
        }
        return false;
    }

    makeOrder(){
        (async () => {
            const rawResponse = await fetch('http://localhost:8080/addOrder', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.order)
            });
        })();

        (async () => {
            const rawResponse = await fetch('http://localhost:8080/addOrderProduct', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.productOrders)
            });
        })();

        let lista = "";
        let tot = 0;
        this.productOrders.forEach(po => {
            let parziale = this.getProductById(po.productId).price*po.quantity;
            tot += parziale;
            lista += `${po.quantity}\t${this.getProductById(po.productId).name}\t€${parziale}\n`;
        })

        alert(`Sintesi dell'ordine n° ${this.order.id}:\n
            Data: ${this.order.date.toLocaleString().substr(0,9)}\n\n
            Prodotti acquistati:\n
            ${lista}\n
            TOTALE:\t€${tot}
            `            
        );
    }
}