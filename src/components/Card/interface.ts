export interface IMission {
  flight: string;
  name: string;
}

export interface ICardProps {
  shipName: string;
  img: string;
  model: string;
  missions: IMission[];
}
