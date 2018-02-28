import React from 'react';
import { render } from 'react-dom';

export class EventExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTitle: 'Initial text'
        };
    }

    setDynamicTitle = (title, e) => {
        this.setState({
            currentTitle: title
        });
    }

    setStaticTitle = () => {
        this.setState({
            currentTitle: 'Static Text'
        });
    }

    render() {
        return (
            <div>
                <h3>State of Parent : {this.props.parentTitle}</h3>
                <h3>State of Event Example : {this.state.currentTitle}</h3>
                <br />
                <button onClick={this.setStaticTitle} >Set Static Text</button>
                <button onClick={e => this.setDynamicTitle('Dynamic Text', e)} >Set Dynamic Text</button>
                <button onClick={e => this.props.setParentTitle('To Parent from Child componet', e)} >Pass Data To Parent</button>
            </div>
        )
    }
}
