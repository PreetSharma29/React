// Q. Create a login form with three entries. When you will click on the submit button on the form it must show form is submitted and all the values that you are storing tn the fields must be shown on the header.  

import { useState } from "react";

const Logshow = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();
setIsSubmitted(true);
};

return (
<div>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="username">Username:</label>
<input
type="text"
id="username"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</div>
<div>
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</div>
<div>
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>
</div>
<button type="submit">Submit</button>
</form>
{isSubmitted && (
<header>
<h2>Form is submitted</h2>
<p>Username: {username}</p>
<p>Password: {password}</p>
<p>Email: {email}</p>
</header>
)}
</div>
)
}
export default Logshow;