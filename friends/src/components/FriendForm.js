import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function FriendFrom (props) {

    const [form, setForm] = React.useState({ name: "", age: "", email: ""});
    const handeChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post ("/api/friends", form)
            .then (res => {console.log(res); props.setFriends(res.data);})
            .catch(err => console.log(err.response));
    };


    return <div>
        <form onSubmit={addFriend}>
            <input type='text'   name='name' value={form.name}  onChange={handeChanges} placeholder="Friend"/>
            <input type='number' name='age'  value={form.age}   onChange={handeChanges} placeholder="Age"/>
            <input type='email'  name='email'value={form.email} onChange={handeChanges} placeholder="Email"/>
            <button type='submit'> Add Friend </button>

        </form>
        </div>
}