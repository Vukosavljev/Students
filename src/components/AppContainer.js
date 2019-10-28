import React, { Component } from 'react'
import Header from './header/Header'
import Users from './Users/Users';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'

class AppContainer extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <Header />
                {
                    this.props.users.map(user => (
                        <div key={user.name}>
                            {user.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersRed.users
})


export default connect(mapStateToProps, { fetchUsers })(AppContainer)