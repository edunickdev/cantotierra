/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ImpactoPage from "../pages/ImpactoPage";
import NosotrosPage from "../pages/NosotrosPage";
import AliadosPage from "../pages/AliadosPage";
import NavBarComponent from "../components/navbar/NavBarComponent";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/impacto" element={<ImpactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/aliados" element={<AliadosPage />} />
        <Route path="/noticias" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
