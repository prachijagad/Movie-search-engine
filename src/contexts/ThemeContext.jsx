import {createContext, useState, useContext} from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
