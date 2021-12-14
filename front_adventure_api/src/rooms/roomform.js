import React, { Component } from "react";
import axios from "axios";

class RoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room_name: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.room_name)
    }
    render() {
        const { room_name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="room_name"
                        value={room_name}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RoomForm;