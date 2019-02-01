import { Dish } from './dish';

export class Site {
    public friendlyName: String; // Madrid
    public name: String;  // mdscc
    public latitude: Number; // 40.2413554
    public longitude: Number; // -4.2480085
    public timeUTC: Number; // 1548868060791
    public timeZoneOffset: Number; // -28800000
    public dishes: Array<Dish>;

    constructor() {
         this.friendlyName = '';
         this.name = '';
         this.latitude = 0;
         this.longitude = 0;
         this.timeUTC = 0;
         this.timeZoneOffset = 0;
         this.dishes = [];
    }
}
