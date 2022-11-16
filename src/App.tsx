import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/cartContext/cartContext";
import { PurchaseContextProvider } from "./context/purchaseContext";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme, device } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={{ ...defaultTheme, device }}>
      <BrowserRouter>
        <CartContextProvider>
          <PurchaseContextProvider>
            <Router />
          </PurchaseContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
