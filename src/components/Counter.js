import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, setCount, increment, decrement,} = useCounter(1);

    const handleInputChange = (event) => {
        setCount(+event.target.value);
    };
    const isDisabledButton = (count <= 1);

    return(
        <div>
            <button onClick={decrement} disabled={isDisabledButton}>-</button>
            <input type="number" onInpt={handleInputChange} value={count}></input>
            <button onClick={increment}>+</button>
            <p>{count}</p>
        </div>
    )
};

export default Counter;