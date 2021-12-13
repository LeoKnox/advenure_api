import React, { Component } from 'react';
import TestData from './testdata.json';
import RoomDetail from './roomdetail';
import axios from 'axios';

class RoomList extends Component {
    state = {
        roomsData:[],
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({roomsData: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                {this.state.roomsData.map( item => {
                    return <h3>{item.room_name}[{item.length}X{item.width}]: {item.description}</h3>
                    })}
            </div>
        )
    }
}

export default RoomList;