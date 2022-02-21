import React from 'react';

import { userService } from '../_services';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { users } = this.state;
        return (

            <div class="card shadow-lg border-0 rounded-lg mt-12">
            <div class="card-header"><h3 class="text-center font-weight-light my-4">Admin</h3></div>
            <div class="card-body">
                <div>
                   User Roles:
                    {users &&
                        <ul>
                            {users.map(user =>
                                <li key={user.id}>{user.firstName} {user.lastName}</li>
                            )}
                        </ul>
                    }
                </div>
            </div>

        </div>
        );
    }
}

export { AdminPage };