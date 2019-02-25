export class Station {
    public friendlyName: string; // Goldtsone
    public name: string;  // gdscc
    public timeUTC: number; // 1548868060791
    public timeZoneOffset: number; // -28800000
    public type?: string;
    public latitude?: number;
    public longitude?: number;

    constructor() {
         this.friendlyName = '';
         this.name = '';
         this.timeUTC = 0;
         this.timeZoneOffset = 0;
    }
}
