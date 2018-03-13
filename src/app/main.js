import React from 'react';
import { render } from 'react-dom';
// import { DateTime } from './components/date-time/date-time.container';
// import { EventExample } from './components/event-example/event-example.container';
import { UserManagementContainer } from './components/user-management/user-management.container';


export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            parentTitle: 'Title from parent'
        };
    }

    setTitle = (title, e) => {
        this.setState({
            parentTitle: title
        })
    }

    render() {
        return (
            <div>
                <UserManagementContainer />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));