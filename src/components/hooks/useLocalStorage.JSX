import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const setValue = value => {  
            setValue(key);
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
            console.log(key)
        } 
  
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    return [storedValue, setValue];
    
  };
