export class Station {
    public friendlyName: String; // Goldtsone
    public name: String;  // gdscc
    public timeUTC: Number; // 1548868060791
    public timeZoneOffset: Number; // -28800000
    public type?: String;
    public latitude?: Number;
    public longitude?: Number;

    constructor() {
         this.friendlyName = '';
         this.name = '';
         this.timeUTC = 0;
         this.timeZoneOffset = 0;
    }
}
