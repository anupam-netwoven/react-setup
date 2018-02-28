import React from 'react';
import { render } from 'react-dom';
import { Clock } from './clock.component';

export class DateTime extends React.Component {

    constructor() {
        super();
        this.state = {
            clock: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalRef = setInterval(() => this.setState({
            clock: new Date().toLocaleString()
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalRef);
    }

    render() {
        return (
            <Clock clock={this.state.clock} />
        )
    }
}
