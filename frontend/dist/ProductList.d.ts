import { ProductCategory } from "./entities/product-category.entity";
import { Product } from "./entities/product.entity";
export declare class ProductList {
    getProducts(): Promise<Product[]>;
    getCategories(): Promise<ProductCategory[]>;
}
