import { ThemeProvider } from "styled-components";
import { GlobalStyle, Tema } from "./global";
import Header from "./components/Cabecalho";
import Hero from "./components/Hero";
import ListaVagas from "./containers/ListaVagas";

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  );
}

export default App;
