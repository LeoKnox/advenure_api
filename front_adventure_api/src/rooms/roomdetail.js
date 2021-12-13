import React, { Component } from 'react';

class RoomDetail extends Component {
    render() {
        const obj = this.props.roomDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.room_name}</h4>
                <h5>
                    {obj.description}
                </h5>
                <h5>Length: {obj.length} X Width: {obj.width}</h5>
            </div>
        );
    }
}

export default RoomDetail;