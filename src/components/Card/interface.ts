import { IMission } from '../globalInterface';

export interface ICardProps {
  shipName: string;
  img: string;
  model: string;
  missions: IMission[];
}
