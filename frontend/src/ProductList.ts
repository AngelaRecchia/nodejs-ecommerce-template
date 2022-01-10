import { ProductCategory } from "./entities/product-category.entity";
import { Product } from "./entities/product.entity";

export class ProductList {

    getProducts(): Promise<Product[]> {
        const result: Product[] = []; 
        return fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(res => { return res as Product[] })
    }

    getCategories(): Promise<ProductCategory[]> {
        const result: ProductCategory[] = []; 
        return fetch("http://localhost:8080/categories")
            .then(res => res.json())
            .then(res => { return res as ProductCategory[] })
    }
}
