import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { AppRouter } from "./routes/router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://canto-de-la-tierra.prismic.io/api/v2/")
      .then((response) => response.json())
      .then((data) => {
        const ref = data.refs[0].ref;
        sessionStorage.setItem("ref", ref);
      })
      .catch((error) => {
        sessionStorage.setItem("ref", error.message);
      });
  }, []);

  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  );
}

export default App;
