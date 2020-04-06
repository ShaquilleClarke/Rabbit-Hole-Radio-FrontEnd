import React, {Component} from 'react'
import Episode from './Episode.js'
import NewEpisodeForm from './NewEpisodeForm.js'

class ProfileContainer extends Component {


        

    render() {
        
        let {username, episodes} = this.props.user
        return (
            <div>
                <h1>Wah Gwan {username}!</h1>
                <h2>Episodes</h2>
                <ol>
                    {
                        episodes.map(episode => {
                            return <Episode key={episode.id} episodes={episode} />
                        })
                    }
                </ol>

                <NewEpisodeForm token={this.props.token} addNewEpisode={this.addNewEpisode} />
            </div>
        )
    }
}

export default ProfileContainer