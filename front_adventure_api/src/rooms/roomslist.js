import React, { Component } from 'react';
import TestData from './testdata.json';
import RoomDetail from './roomdetail';
import RoomForm from './roomform';
import axios from 'axios';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsData: [],
            room: " ",
            showComponent: false,
        };
        this.getRoomDetail = this.getRoomDetail.bind(this);
        this.showRoomDetails = this.showRoomDetails.bind(this);
    }

    getRoomDetail(item) {
        axios
            .get("http://127.0.0.1:8000/".concat(item.absolute_url))
            .then((response) => {
                console.log(response);
                this.setState({ room: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    showRoomDetails(item) {
        this.getRoomDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/")
            .then((response) => {
                this.setState({roomsData: response.data})
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return(
            <div>
                <div>
                    <RoomForm />
                </div>
                {this.state.roomsData.map( item => {
                    return (
                        <h3 key={item.id} onClick={() => this.showRoomDetails(item)}>
                            {item.room_name}
                        </h3>
                    );
                })}

                {this.state.showComponent ? (
                    <RoomDetail roomDetail={this.state.room} />
                ) : null}
            </div>
        )
    }
}

export default RoomList;