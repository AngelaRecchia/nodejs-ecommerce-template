import Util from '../util'
export class Order {
    id: string;
    date: Date;
    userId: string;

    constructor(){
        this.id = Util.generateRandomId();
        this.date = new Date();
    }
}