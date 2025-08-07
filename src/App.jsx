import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }
    return (
        <>
            <h1>Counter Application</h1>
            <div id="counterDiv">Count: {count}</div>
            <div id="buttonNav">
                <Button title="Increment" func={increment} />
                <Button title="Decrement" func={decrement} />
                <Button title="Reset" func={reset} />
            </div>
        </>
    );
}

export default App;

function Button({ title, func }) {
    return <button onClick={func}>{title}</button>;
}
