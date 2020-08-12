import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {
        if (darkMode === true) {
            console.log('darkmode is on');
            document.body.classList.add('dark-mode');
        } else {
            console.log('darkmode is off')
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode];
};