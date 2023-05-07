// Q. Demonstrate the use of useRef,useContext and useReducer hook through your code.

import React, { useContext, useMemo, useReducer, useRef } from "react";
const initialState={
count : 0,
isEven: false
};

const reducer = (state, action)=>{
switch(action.type){
case 'increment' : {
return {
...state,
count: state.count+1,
isEven: (state.count+1)%2===0
};
}
case 'decrement': {
return {
...state,
count: state.count -1,
isEven:(state.count-1)%2===0
};
}
default:
throw new Error('Unsupported action type')
}
}

const AppContext = React.createContext(null);
const ChildComponent = () => {
const {count}=useContext(AppContext);
return (
<div>
<h2>Count: {count}</h2>
</div>
)
}
const Increment = () => {
const [state, dispatch]=useReducer(reducer, initialState);
const inputRef=useRef(null);
const handleIncrement = () => {
dispatch({type: 'increment'});
};
const handleDecrement =()=>{
dispatch({type: 'decrement'});
};
const handleFocus=()=>{
inputRef.current.focus();
};
const memoizedValue=useMemo(()=>{
return state.isEven ? 'Even' : 'Odd';
},[state.isEven]);
return (
<div>
<h1>Count is {memoizedValue}</h1>
<AppContext.Provider value={state}>
<ChildComponent/>
</AppContext.Provider>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
<input type="text" ref={inputRef}/>
<button onClick={handleFocus}>Focus Input</button>
</div>
)
}
export default Increment;

