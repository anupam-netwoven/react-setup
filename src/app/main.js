import React from 'react';
import { render } from 'react-dom';
import { DateTime } from './components/date-time/date-time.container';

export class App extends React.Component {
    render() {
        return (
            <DateTime />
        )
    }
}

render(<App />, document.getElementById('app'));