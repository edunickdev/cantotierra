import { create } from "zustand";

export const useNavbarState = create((set) => ({
    navbarState: "Inicio",
    setNavbarState: (state) => set({ navbarState: state }),
}));
