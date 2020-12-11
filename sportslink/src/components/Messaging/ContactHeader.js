import React from 'react';
import { getUser } from '../../actions/profiles';
import './ContactHeader.css';


class ContactHeader extends React.Component{

    constructor(props){
        super(props)
        getUser(this.props.currContact, this);
    }

    state={
        user: {
            image: null,
            username: ''
        }

    }
    render() {
        if (this.props.currContact !== null) {
            return (
                <div className="returnDiv">
                    <div className="header">
                        <img className="contactImage" src={this.state.user.image} alt="Profile Pic"></img>
                        <p>{this.state.user.username}</p>
                    </div>
                    <br/>
                    <hr/>
                </div>
            )
        }
        return (
            <div className="returnDiv">
                <div className="header">
                    <img className="contactImage" src="logo512.png" alt="Profile Pic"></img>
                    <p>{this.state.user.username}</p>
                </div>
                <br/>
                <hr/>
            </div>
        )
    }
}

export default ContactHeader