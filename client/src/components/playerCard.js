import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

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

        }).catch(err => console.log(err))
    }



        render() {
            return(
                <div>
                   players
                </div>
            )
    }
}
    export default playerCard;