import { IMission } from '../globalInterface';

export interface IShip {
  name: string;
  image: string;
  model: string;
  missions: IMission[];
}

export interface IShipData {
  ships: IShip[];
}

export interface IShipVars {
  limit: number;
  offset: number;
}
