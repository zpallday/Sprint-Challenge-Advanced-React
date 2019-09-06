import React from 'react';
import axios from 'axios';
import PlayerForm from './playerForm';

class playerCard extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount(){
        axios
        .get(' http://localhost:5000/api/players')
        .then((res) => {
        this.setState({players: res.data})
        }).catch(err => console.log(err))
    }



        render() {
            return(
                <div>
                  <PlayerForm data={this.state.players} />
                </div>
            )

    };
};
    export default playerCard;