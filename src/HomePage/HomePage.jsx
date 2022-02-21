import React from 'react';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="card shadow-lg border-0 rounded-lg mt-12">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Home</h3></div>
                            <div class="card-body">
                                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                                <div>
                                    Currently UserRole:
                                    {userFromApi &&
                                        <ul>
                                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                                        </ul>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export { HomePage };