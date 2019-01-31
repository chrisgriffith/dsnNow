import { DownSignal} from './down-signal';
import { Target } from './target';
import { UpSignal } from './up-signal';

export class Dish {
    public azimuthAngle: Number; // "180.00"
    public created: String; // "2019-01-30T15:56:45.045Z"
    public elevationAngle: Number; // "89.81"
    public isArray: Boolean; // "false"
    public isDDOR: Boolean; // "false"
    public isMSPA: Boolean; // "false"
    public name: String; // "DSS24"
    public updated: String; // "2019-01-30T15:56:45.045Z"
    public windSpeed: Number; // "0.00"
    public downSignal: Array<DownSignal>;
    public upSignal: UpSignal;
    public target: Array<Target>;

    constructor () {
        this.azimuthAngle = 0;
        this.created = '';
        this.elevationAngle = 0;
        this.isArray = false;
        this.isDDOR = false;
        this.isMSPA = false;
        this.name = '';
        this.updated = '';
        this.windSpeed = 0;
        this.downSignal = [];
        this.upSignal = new UpSignal();
        this.target = [];
    }
}
