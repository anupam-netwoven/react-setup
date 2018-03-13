import React from 'react';
import { render } from 'react-dom';
import randomstring from 'randomstring';

export class UserManagementContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [
                { name: 'Al Pacino', age: 70 },
                { name: 'Robert De Niro', age: 72 },
            ]
        };
    }

    addUser = () => {
        debugger;
        let raw = randomstring.generate({
            length: 10,
            charset: 'alphabetic'
        });
        let newUserName = raw.substring(0, 1).toUpperCase() + raw.substring(1, raw.length).toLocaleLowerCase();
        this.setState({
            users: [...this.state.users, { name: newUserName, age: 65 }]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addUser}>Add</button>
                <ul>
                    {
                        this.state.users.map((item, index) => {
                            return <li>{item.name}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
}
