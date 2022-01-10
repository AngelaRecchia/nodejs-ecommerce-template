import { OrderProduct } from "./entities/order-product.entity";
import { Order } from "./entities/order.entity";
import { Product } from "./entities/product.entity";
export declare class Cart {
    productOrders: OrderProduct[];
    order: Order;
    products: Product[];
    constructor();
    getProductById(id: string): Product;
    addProductToCart(product: Product): void;
    removeProductFromCart(product: Product): boolean;
    makeOrder(): void;
}
