import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, setCount, increment, decrement} = useCounter(1);

    const handleInputChange = (event) => {
        setCount(+event.target.value);
        if (+event.target.value < 1){
            setCount(1);
        };
    };
    const isDisabledButton = (count <= 1);

    return(
        <div>
            <button onClick={decrement} disabled={isDisabledButton}>-</button>
            <input type="number" onInput={handleInputChange} value={count}></input>
            <button onClick={increment}>+</button>
        </div>
    )
};

export default Counter;