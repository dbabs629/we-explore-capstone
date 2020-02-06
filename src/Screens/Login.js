import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js';

class LoginScreen extends Component {
    render() {
        return (
            <div>
                {/* Top Title */}
                <div>
                    <div><center><h1>We Explore</h1></center></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <center><article>
                    <section>
                        <h3>Email</h3>
                        <input type="email" placeholder="Email@example.com"></input><br />
                        <h3>Password</h3>
                        <input type="password" placeholder="Password"></input><br />
                        <a href="#">Forgot Password</a><br /><br />
                        <button type="submit">Login</button><br /><br /><br />
                        <a href="#">Create an Account</a>
                    </section>
                </article></center>
            </div>
        )
    }
}

export default LoginScreen;