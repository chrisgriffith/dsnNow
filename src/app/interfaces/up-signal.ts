export class UpSignal {
    public dataRate: Number; // "2000.000000"
    public frequency: Number; // "7158"
    public power: Number; // "0.000000"
    public signalType: String; // "none"
    public signalTypeDebug: String; // "OFF 0 IDLE"
    public spacecraft: String; // "DUG"
    public spacecraftId: Number; // "99"

    constructor() {
        this.dataRate = 0;
        this.frequency = 0;
        this.power = 0;
        this.signalType = '';
        this.signalTypeDebug = '';
        this.spacecraft = '';
        this.spacecraftId = 0;
    }
}
