import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

export const RowStyled = styled('div')(() => {
  const mobile = useMediaQuery('(max-width:600px)');
  return {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: mobile ? 600 : '100%',
    width: '100%',
    margin: '0 auto 0 auto',
    justifyContent: mobile ? 'center' : 'flex-start'
  };
});

export const ColumnStyled = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    width: '100%',
    margin: '10px auto 10px auto',
    justifyContent: 'flex-start'
  };
});

export const Divider = styled('div')(({ theme }) => ({
  maxWidth: 300,
  margin: '20px auto 20px auto',
  borderBottom: `1px dashed ${theme.palette.secondary.main}`
}));
