export class UpSignal {
    public dataRate: number; // "2000.000000"
    public frequency: number; // "7158"
    public power: number; // "0.000000"
    public signalType: string; // "none"
    public signalTypeDebug: string; // "OFF 0 IDLE"
    public spacecraft: string; // "DUG"
    public spacecraftId: number; // "99"

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
