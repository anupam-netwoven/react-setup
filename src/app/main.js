import React from 'react';
import { render } from 'react-dom';

export class App extends React.Component {
    render() {
        return (
            <div>App Works</div>
        )
    }
}

render(<App />, document.getElementById("app"));