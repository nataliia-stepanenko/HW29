import useCounter from "../hooks/useCounter";

import { useState } from "react";

const Counter = () => {
    const {count, setCount, increment, decrement,} = useCounter(1);
    const [isDisabled, setDisabled] = useState(true);

    const handleInputChange = (event) => {
        setCount(+event.target.value);
        setDisabled(false);
    };

    return(
        <div>
            <button onClick={decrement} disabled={isDisabled}>-</button>
            <input type="number" onInput={handleInputChange} value={count}></input>
            <button onClick={increment}>+</button>
            <p>{count}</p>
        </div>
    )
};

export default Counter;