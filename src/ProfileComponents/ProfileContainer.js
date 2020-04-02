import React, {Component} from 'react'
import NewEpisodeForm from './NewEpisodeForm.js'

class ProfileContainer extends Component {
    render() {
        // let {id, username, episodes} = this.props.user
        return (
            <div>
                <h1>User Info Goes Here</h1>
                <NewEpisodeForm />
            </div>
        )
    }
}

export default ProfileContainer