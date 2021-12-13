import React, { Component } from 'react';
import TestData from './testdata.json';

class RoomList extends Component {
    render() {
        return(
            <div>
                {TestData.map( r =>
                    <h4>{r.room_name}[{r.length}x{r.width}]: {r.description}</h4>
                    )
                }
            </div>
        )
    }
}

export default RoomList;