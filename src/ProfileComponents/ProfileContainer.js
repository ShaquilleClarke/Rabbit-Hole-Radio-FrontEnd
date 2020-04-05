import React, {Component} from 'react'
import NewEpisodeForm from './NewEpisodeForm.js'

class ProfileContainer extends Component {

    

    addNewEpisode = (epData) => {
        console.log(epData)
    }
    render() {
        
        // let {id, username, episodes} = this.props.user
        return (
            <div>
                <h1>Wah Gwan</h1>
                <NewEpisodeForm addNewEpisode={this.addNewEpisode} />
            </div>
        )
    }
}

export default ProfileContainer