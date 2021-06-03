import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const setValue = value => {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } 
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    return [storedValue];
  };