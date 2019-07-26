import {useState} from "react";

const useLocalstorage = (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
     const item = window.localStorage.getItem(key)
        if (item) {
            return JSON.parse(item);
        } else {
            return initialValue
        }
    });
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    };
    return [storedValue, setValue]
}
// useLocalStorage (key, initialValue) ----> [value, setValue]
//useState(initialValue) =====> [value, setValue]
export default useLocalStorage