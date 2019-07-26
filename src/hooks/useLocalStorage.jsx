import {useState} from "react";

const useLocalstorage = (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
     const item = window.localStorage.getItem(key)
        if (item) {
            return JSON.parse(item);
        }
    })
}

//useState(initialValue) =====> [value, setValue]
export default useLocalStorage