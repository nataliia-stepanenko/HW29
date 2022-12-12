import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, setCount, increment, decrement, reset,} = useCounter(1);

    return(
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" value={count}></input>
            <button onClick={increment}>+</button>
        </div>
    )
};

export default Counter;