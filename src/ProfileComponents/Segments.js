import React, { Component } from 'react'


function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
    }
}

class Segments extends Component {

    state = {
        currentSong: null,
        music: "stopped",
        duration: null
    }

    handleDelete = (e) => {
        
        let {id} = this.props.segment
        console.log(id)
        this.props.deleteSegment(id)
    }

    thisSongTitle = (e) => {
        let {title} = this.props.segment
        this.setState({
            currentSong: title
        })
    }

    setMusicToPlay = (e) => {
        this.music.play()
        this.setState({
            music: "playing"
        })
    }

    setMusicToPause = (e) => {
        this.setState({
            music: "paused"
        })
    }

    setMusicToStop = (e) => {
        // this.music.pause()
        this.setState({
            music: "stopped",
            currentSong: null
        })
    }

    render() {

        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration)

        const renderDelete = <button onClick={this.handleDelete} >Delete Segment</button>
        let {title} = this.props.segment



        const buttonToPlay = (
            <button className="ui labelled icon red button" onClick={this.setMusicToPlay}>
                <i className="large play circle outline icon"/>Play</button>
        )
      
        const buttonToPause = (
            <button className="ui labelled icon red button" onClick={this.setMusicToPause}>
                <i className="large pause circle outline icon"/>Pause</button>
        )
      
        const buttonToStop = <button className="ui labelled icon button" onClick={this.setMusicToStop}>
            <i className="large stop circle outline icon"/>Stop</button>
      
        // const nowPlaying = this.state.music === "playing" ? (
        //     <div className="current-track" >
        //       Now Playing: {this.state.currentSong}
        //     </div>) : null
      
        // const nowPaused = this.state.music === "paused" ? (
        //     <div className="current-song">
        //       {this.state.currentSong} is paused
        //     </div>) : null
      
        const showSongTime = this.state.music === "playing" || 
          this.state.music === "paused" ? (<div>{currentTime} / {duration}
          {" "}</div>) : null
        
        
        return (

            <div>
                <div className="info-container" >
                    {showSongTime}
                </div>
                <div className="button-container" >
                {this.state.music === "paused" && buttonToPlay}  
                {this.state.music === "playing" && buttonToPause}
                {this.state.music === "playing" || this.state.music === "paused" ? 
                    buttonToStop : null
                }
                </div>
                <ul>
                    <button onClick={this.thisSongTitle} ><li className="title" >{title}</li></button> {renderDelete}
                    <audio ref={ref => (this.music = ref)} />
                </ul>
            </div>

                
                
                    
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentSong !== prevState.currentSong) {
            let {video} = this.props.segment
            let song = video
            this.setState({
                currentSong: song
            })
            if (song) {
                this.music.src = song;
                this.music.play();
                this.setState({
                    music: "playing"
                })
            }
        }
        if (this.state.music !== prevState.music) {
            if (this.state.music === "paused") {
                this.music.pause()
            }
            if (this.state.music === "playing" && prevState.music === "music") {
                this.music.play()
            }
            if (this.state.music === "stopped") {
                this.music.pause()
                this.currentTime = 0
                this.setState({
                    currentSong: null
                })
            }
        }

    }

    componentDidMount() {
        this.music.addEventListener('timeupdate', e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            })
        })
    }

    componentWillUnmount() {
        this.music.removeEventListener('timeupdate', () => {})
    }
}

export default Segments