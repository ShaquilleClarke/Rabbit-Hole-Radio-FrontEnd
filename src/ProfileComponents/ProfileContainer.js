import React, {Component} from 'react'
import Episode from './Episode.js'
import NewEpisodeForm from './NewEpisodeForm.js'


class ProfileContainer extends Component {


        

    render() {
        
        let {username, episodes} = this.props.user
        return (
            
                

            <div>
                {/* <video
                 autoPlay
                 loop
                 muted
                 styled={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                 }}
                  >
                    <source src={AstroBoy} type="video/mp4" />
                </video> */}
                <h1 align="center" >Wah Gwan {username}!</h1>
                <NewEpisodeForm token={this.props.token} addNewEpisode={this.props.addNewEpisode} />
                <h2 align="center" >Episodes</h2>
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