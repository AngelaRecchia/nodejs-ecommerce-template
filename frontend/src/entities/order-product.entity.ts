export class OrderProduct {
    orderId: string;
    productId: string;
    quantity: number;

    constructor(id: string, prodId: string){
        this.orderId = id;
        this.productId = prodId;
    }
}