export interface IShip {
  name: string;
  image: string;
  model: string;
  missions: {
    flight: string;
    name: string;
  }[];
}

export interface IShipData {
  ships: IShip[];
}

export interface IShipVars {
  limit: number;
  offset: number;
}
