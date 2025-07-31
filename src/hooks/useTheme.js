import { useEffect, useState } from "react";


const useTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "light");

    // console.log(theme);


    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        }
        else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme])


    return [theme, setTheme];
}



export default useTheme;