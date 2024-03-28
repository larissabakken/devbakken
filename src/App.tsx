import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router.tsx';
import { theme } from './theme';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
    </MantineProvider>
  );
}
