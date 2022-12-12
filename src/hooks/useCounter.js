import {useState} from 'react';

const useCounter = (initialValue = 1) => {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    const reset = () => setCount(initialValue);

    return {
        count,
        setCount,
        increment,
        decrement,
        reset,
    };
};

export default useCounter;