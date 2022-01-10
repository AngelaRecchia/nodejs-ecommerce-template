export default class Util {
    static vocabulary = "0123456789abcdefghijklmnopqrstuvwxyz";

    static generateRandomString(len: number){
        let result = '';
        for (let i = len; i > 0; i--) {
            result += 
                Util.vocabulary[Math.floor(Math.random() * Util.vocabulary.length)];
        }
        return result;
    }

    static generateRandomId() {
        const lengths = [8,4,4,4,12];
        let parts: string[] = [];
        lengths.map(n => parts.push(Util.generateRandomString(n)));
        return parts.join("-");
    }
}
