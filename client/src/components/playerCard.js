import React from 'react';
import axios from 'axios';
import PlayerForm from './playerForm';

 class playerCard extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            data: []
        }
    }
    componentDidMount() {
        this._isMounted = true;
        axios
        .get(' http://localhost:5000/api/players')
        .then(data => {
        if (this._isMounted) {
        this.setState({
        data: data.data})
 
}
})
}

componentWillUnmount() {
    this._isMounted = false;
  }

         render() {
            return(
                <div>
                   <PlayerForm data={this.state.data}/>
                </div>
            )
    }
}
    export default playerCard; 
