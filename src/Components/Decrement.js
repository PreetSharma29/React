// Q. Demonstrate the use of useEffect and useMemo hook through your code.

import { useState, useEffect, useMemo } from "react";

const Decrement = () => {
const [count, setCount] = useState(0);
const [text, setText] = useState("");
const [filteredText, setFilteredText] = useState("");

useEffect(() => {
console.log("Component mounted or updated");
});

useEffect(() => {
console.log("Only Component Mounted");
}, []);

useEffect(() => {
console.log("Component Updated");
}, [count]);

const filtered = useMemo(() => {
console.log("Filtering text");
return text
.split("")
.filter((char) => char.toLowerCase() !== "a")
.join("");
}, [text]);

return (
<div>
<h1>{count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
<br />
<input value={text} onChange={(e) => setText(e.target.value)} />
<p>Original Text: {text}</p>
<p>Filtered Text: {filtered}</p>
</div>
)
}
export default Decrement;


