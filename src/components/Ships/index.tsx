import { useRef, useEffect, useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SHIPS } from '../../data';
import { IShip, IShipData, IShipVars } from './interface';
import Card from '../Card';
import { ColumnStyled, Divider, RowStyled } from '../globalStyles';
import { Typography } from '@mui/material';

const pageLimit = 5;
export default function Ships() {
  const { loading, data, error, fetchMore } = useQuery<IShipData, IShipVars>(
    SHIPS,
    {
      variables: { limit: pageLimit, offset: 0 }
    }
  );
  const loader = useRef<null | HTMLDivElement>(null);
  const pageOffset = useRef<number>(0);
  const handleObserver: (entries: IntersectionObserverEntry[]) => void =
    useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        //If loading don't request more
        if (target.isIntersecting && !loading) {
          fetchMore({ variables: { offset: pageOffset.current } });
        }
      },
      [loading, fetchMore]
    );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    pageOffset.current = data ? data.ships.length : 0;
  }, [data]);

  if (error) {
    return (
      <RowStyled>
        <Typography variant="body1" align="center" style={{ width: '100%' }}>
          {`Something went wrong ${error}`}
        </Typography>
      </RowStyled>
    );
  }
  return (
    <div>
      <RowStyled>
        <Typography variant="h1" align="center" style={{ width: '100%' }}>
          SpaceX Ships
        </Typography>
      </RowStyled>
      <Divider />

      <ColumnStyled>
        {data &&
          data.ships.map((ship: IShip, index: number) => (
            <Card
              shipName={ship.name}
              img={ship.image}
              model={ship.model}
              missions={ship.missions}
              key={`card_${index}`}
            ></Card>
          ))}
      </ColumnStyled>

      <div
        ref={loader}
        style={{ height: 20, textAlign: 'center' }}
        onClick={() => fetchMore({ variables: { offset: pageOffset.current } })}
      >
        {loading ? 'Loading' : 'Load More'}
      </div>
    </div>
  );
}
