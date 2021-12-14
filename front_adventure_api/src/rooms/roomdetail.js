import React, { Component } from 'react';
import RoomUpdate from './roomupdate';

class RoomDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateRoomDetails = this.updateRoomDetails.bind(this);
    }
    updateRoomDetails() {
        this.setState({ showComponent: true });
    }

    render() {
        const obj = this.props.roomDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.room_name}</h4>
                <h5>
                    {obj.description}
                </h5>
                <h5>Length: {obj.length} X Width: {obj.width}</h5>
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => this.updateRoomDetails()}
                >
                    Update
                </button>
                {this.state.showComponent ? <RoomUpdate roomUpdate={obj} /> : null}
            </div>
        );
    }
}

export default RoomDetail;