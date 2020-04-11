import React, {Component} from 'react'
import Episode from './Episode.js'
import NewEpisodeForm from './NewEpisodeForm.js'

class ProfileContainer extends Component {


        

    render() {
        
        let {username, episodes} = this.props.user
        return (
            <div>
                <h1>Wah Gwan {username}!</h1>
                <NewEpisodeForm token={this.props.token} addNewEpisode={this.props.addNewEpisode} />
                <h2>Playlist</h2>
                <ol>
                    {
                        episodes.map(episode => {
                            return <Episode key={episode.id} episodes={episode} iD={episode.id} deleteEpisode={this.props.deleteEpisode} handleResp={this.props.handleResp} />
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default ProfileContainer