import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ShipNameStyled = styled(Typography)(({ theme }) => {
  const mobile = useMediaQuery('(max-width:600px)');
  return {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    textAlign: mobile ? 'center' : 'left'
  };
});

export const CardStyled = styled('div')(() => {
  const mobile = useMediaQuery('(max-width:600px)');

  return {
    width: '100%',
    display: 'flex',
    flexDirection: mobile ? 'column' : 'row',
    marginBottom: 10,
    backgroundColor: '#f1f1f1'
  };
});

export const ShipImgStyled = styled('img')(({ theme }) => {
  const mobile = useMediaQuery('(max-width:600px)');
  return {
    width: '100%',
    minWidth: 200,
    maxWidth: mobile ? '100%' : 200,
    boxSizing: 'border-box',
    margin: mobile ? 0 : 20,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `20px solid ${theme.palette.white.main}`,
    objectFit: 'cover'
  };
});
