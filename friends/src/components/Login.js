import React from 'react'; 
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
    const [form, setForm] = React.useState({username:"", password:""}); 
    const handleChanges = e => {setForm({...form, [e.target.name]: e.target.value})};// 3
    const login = e => {    // 4

        e.preventDefault(); // this prevents page from refreshing to let the login run
        axiosWithAuth()
        .post("/api/login", form) // 6 posting your form to the API~~~
        .then(res => {console.log(res); localStorage.setItem("token", res.data.payload); props.history.push("/");}) // 1.0 only console.log
          // 7 .THEN - above - add localStorage to the .then to save token - NOW PASS PROPS!
        .catch(err => {console.log(err.response); setForm({ username: "", password: ""});})  // Wrap console.log in curlies and add setForm
    };

 return (
    <form onSubmit={login}>  
    <h3>Welcome to Friends</h3>
    <h1>Log In!</h1>
    <input type="text" name="username" onChange={handleChanges} value={form.username}/>     
    <input type="password" name="password"onChange={handleChanges} value={form.password}/>
    <button type="submit"> Login </button>

</form>
 )

}
export default Login;