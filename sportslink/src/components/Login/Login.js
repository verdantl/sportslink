import React from 'react'
import "./Login.css"

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import Input from "../Input/Input.js";

import { login} from "../../actions/user.js";

class Login extends React.Component{
    state = {
        usern: "",
        password: "",
        users: [
            {usern: "user", password: "user"},
            {usern: "admin", password: "admin"}
        ]
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // console.log(name)

        this.setState({
            [name]:value
        });
    };

    render() {
        return (
            <div className="loginPage">
                <div className='loginTitle'><h1>Sportslink</h1><p>Bringing together the greatest athletic community around the globe.</p></div>
                <div className="loginContainer">
                    <h1>Log in</h1>
                    <Input
                        name="usern"
                        onChange={this.handleChange}
                        label="Username"
                    />

                    <Input
                        name="password"
                        onChange={this.handleChange}
                        label="Password"
                    />

                    <br/>
                    <Button
                        variant="contained"
                        onClick={() => login(this)}
                        className="loginButton"
                    > 
                        Log In    
                    </Button>

                    <br/><br/>
                    
                    <Link to="/signup">Sign up for an account here.</Link>
                    <br/><br/>
                    <Link to="/">Forgot password?</Link>
                </div>
            </div>
        )
    }
}

export default Login