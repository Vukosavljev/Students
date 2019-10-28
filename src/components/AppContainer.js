import React, { Component } from 'react'
import Header from './header/Header'
import Student from './Student/Student';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { fetchStudents } from '../actions/studentsActions';
import './AppContainer.scss'

class AppContainer extends Component {

    componentWillMount() {
        this.props.fetchUsers();
        this.props.fetchStudents();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="students-container">
                    {
                        this.props.students.map(student => <Student key={student.id} details={student} />)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersRed.users,
    students: state.usersRed.students,
})


export default connect(mapStateToProps, { fetchUsers, fetchStudents })(AppContainer)