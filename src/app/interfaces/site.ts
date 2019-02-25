import { Dish } from './dish';

export class Site {
    public friendlyName: string; // Madrid
    public name: string;  // mdscc
    public latitude: number; // 40.2413554
    public longitude: number; // -4.2480085
    public timeUTC: number; // 1548868060791
    public timeZoneOffset: number; // -28800000
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
