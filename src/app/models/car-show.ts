import { CarClass } from './car-class';

export interface CarShow {
  id?: number;
  name: string;
  date: string;
  year: number;
  classes: Array<CarClass>;
}
