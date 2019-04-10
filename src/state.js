console.log('state is starting...');

import React from 'react';
import ReactDOM from 'react-dom';



class StateApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
        this.clickEventOn = this.clickEventOn.bind(this)

    }
    render() {
        let style = {
            backgroundColor: 'yellow',
            marginTop: 30
        }
        return(
            <div style={style}>
                <h2>{this.state.value}</h2>
                <button onClick={this.clickEventOn}>click!!</button>
            </div>
        );
    }

    clickEventOn(){
        this.setState({
            value: this.state.value + 3
        })
    }
}

ReactDOM.render(
    <StateApp/>,
    document.getElementById('state')
);



