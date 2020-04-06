import React, {FunctionComponent, useState} from "react";

const App: FunctionComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
};
export default App;
