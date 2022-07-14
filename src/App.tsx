import { ApolloProvider } from '@apollo/client';
import Ships from './components/Ships';
import { customTheme } from './theme';
import { ThemeProvider } from '@mui/system';
import { client } from './data/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <Ships />
      </ThemeProvider>
    </ApolloProvider>
  );
}
