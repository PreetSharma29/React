// Display Current Date and Time in JSX in React JS. Use two buttons for the date and time. While clicking it displays the data and time.
// Calculator

import { useState } from "react";
// import './App.css';

const Datetime = () => {
const [result, setResult] = useState("");

const handleButtonClick = (e) => {
setResult(result.concat(e.target.name));
};

const handleClear = () => {
setResult("");
};

const handleBackspace = () => {
setResult(result.slice(0, -1));
};

const handleCalculate = () => {
try {
setResult(eval(result).toString());
} catch (error) {
setResult("Error");
}
};

return (
<div className="center">
<div className="calculator">
<div className="display">{result}</div>
<div className="buttons">
<button className="clear btn" onClick={handleClear}>
AC
</button>
<button className="operator btn" name="/" onClick={handleButtonClick}>
&divide;
</button>
<button className="operator btn" name="*" onClick={handleButtonClick}>
&times;
</button>
<button className="backspace btn" onClick={handleBackspace}>
&larr;
</button>
<button className="btn" name="7" onClick={handleButtonClick}>
7
</button>
<button className="btn" name="8" onClick={handleButtonClick}>
8
</button>
<button className="btn" name="9" onClick={handleButtonClick}>
9
</button>
<button className="operator btn" name="-" onClick={handleButtonClick}>
&minus;
</button>
<button className="btn" name="4" onClick={handleButtonClick}>
4
</button>
<button className="btn" name="5" onClick={handleButtonClick}>
5
</button>
<button className="btn" name="6" onClick={handleButtonClick}>
6
</button>
<button className="operator btn" name="+" onClick={handleButtonClick}>
&#43;
</button>
<button className="btn" name="1" onClick={handleButtonClick}>
1
</button>
<button className="btn" name="2" onClick={handleButtonClick}>
2
</button>
<button className="btn" name="3" onClick={handleButtonClick}>
3
</button>
<button className="equal btn" onClick={handleCalculate}>
&#61;
</button>
<button className="zero btn" name="0" onClick={handleButtonClick}>
0
</button>
<button className="btn" name="." onClick={handleButtonClick}>
.
</button>
</div>
</div>
</div>
)
}

export default Datetime;
