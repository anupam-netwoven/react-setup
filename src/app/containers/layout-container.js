import React from 'react';
import { render } from 'react-dom';
import { UserManagementContainer } from './../components/user-management/user-management.container';

export class LayoutContainer extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         parentTitle: 'Title from parent'
    //     };
    // }

    // setTitle = (title, e) => {
    //     this.setState({
    //         parentTitle: title
    //     })
    // }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <UserManagementContainer {...this.props} />
            </div>
        )
    }
}