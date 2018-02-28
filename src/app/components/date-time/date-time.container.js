import React from 'react';
import { render } from 'react-dom';
import { Clock } from './clock.component';

export class DateTime extends React.Component {
    render() {
        return (
            <Clock time="no idea" />
        )
    }
}
