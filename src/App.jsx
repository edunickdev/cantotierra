import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { AppRouter } from "./routes/router";

function App() {
  return (
    <NextUIProvider>
        <AppRouter />
    </NextUIProvider>
  );
}

export default App;
