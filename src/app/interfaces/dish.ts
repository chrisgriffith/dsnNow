import { DownSignal } from './down-signal';
import { UpSignal } from './up-signal';
import { Target } from './target';

export interface Dish {
    azimuthAngle: Number; // "180.00"
    created: String; // "2019-01-30T15:56:45.045Z"
    elevationAngle: Number; // "89.81"
    isArray: Boolean; // "false"
    isDDOR: Boolean; // "false"
    isMSPA: Boolean; // "false"
    name: String; // "DSS24"
    updated: String; // "2019-01-30T15:56:45.045Z"
    windSpeed: Number; // "0.00"
    downSignal: DownSignal;
    upSignal: UpSignal;
    target: Target;
}
