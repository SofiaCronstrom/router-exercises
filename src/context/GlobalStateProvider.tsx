import { createContext } from "react";

interface IGLobalStateContex {
    isLoggedIn: boolean;
    toggleIsLoggedIn: () => void;
}

export const GlobalStateContext = createContext<IGLobalStateContex>({} as IGLobalStateContex);