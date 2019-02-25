import { DownSignal} from './down-signal';
import { Target } from './target';
import { UpSignal } from './up-signal';

export class Dish {
    public azimuthAngle: number; // "180.00"
    public created: string; // "2019-01-30T15:56:45.045Z"
    public elevationAngle: number; // "89.81"
    public isArray: boolean; // "false"
    public isDDOR: boolean; // "false"
    public isMSPA: boolean; // "false"
    public name: string; // "DSS24"
    public friendlyName: string; // DSS 24
    public updated: string; // "2019-01-30T15:56:45.045Z"
    public windSpeed: number; // "0.00"
    public downSignal: Array<DownSignal>;
    public upSignal: UpSignal;
    public target: Array<Target>;
    public type: string;

    constructor () {
        this.azimuthAngle = 0;
        this.created = '';
        this.elevationAngle = 0;
        this.isArray = false;
        this.isDDOR = false;
        this.isMSPA = false;
        this.name = '';
        this.friendlyName = '';
        this.updated = '';
        this.windSpeed = 0;
        this.downSignal = [];
        this.upSignal = new UpSignal();
        this.target = [];
        this.type = '';
    }
}
