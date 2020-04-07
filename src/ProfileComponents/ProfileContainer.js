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
                <h2>Episodes</h2>
                <ol>
                    {
                        episodes.map(episode => {
                            return <Episode key={episode.id} episodes={episode} deleteEpisode={this.props.deleteEpisode} />
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default ProfileContainer