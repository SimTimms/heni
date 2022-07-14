import { CardStyled, ShipImgStyled, ShipNameStyled } from './styles';
import { ICardProps, IMission } from './interface';
import { ColumnStyled, RowStyled } from '../globalStyles';

export default function Card({ shipName, img, model, missions }: ICardProps) {
  return (
    <CardStyled>
      <ShipImgStyled src={img} alt={`Photo of "${shipName}"`} />
      <ColumnStyled>
        <ShipNameStyled variant="h3">{shipName}</ShipNameStyled>
        {model && <ShipNameStyled>Model: {model}</ShipNameStyled>}
        <ColumnStyled>
          <ShipNameStyled variant="h4">Missions</ShipNameStyled>
          {missions.map((mission: IMission, index: number) => {
            return index < 5 ? (
              <RowStyled key={`${index}-ship-name`}>
                <ShipNameStyled variant="body1">
                  {mission.flight} {mission.name}
                </ShipNameStyled>
              </RowStyled>
            ) : index === 5 ? (
              <ShipNameStyled variant="body1" key={`${index}-ship-name`}>
                ...
              </ShipNameStyled>
            ) : null;
          })}
        </ColumnStyled>
      </ColumnStyled>
    </CardStyled>
  );
}
