import React, { Component } from 'react';

class RoomDetail extends Component {
    render() {
    const r = this.props.r
        return (
            <div>
                <h4>{r.id}</h4>
                <h4>{r.room_name}</h4>
                <h4>{r.description}</h4>
                <h4>{r.length} X {r.width}</h4>
            </div>
        )
    }
}

export default RoomDetail;