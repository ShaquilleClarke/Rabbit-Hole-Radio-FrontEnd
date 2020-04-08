import React, { Component } from 'react'




class NewSegment extends Component {

    state = {
        title: "",
        cancel: false,
        song_file: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {title, song_file} = this.state
        let episode_id = this.props.epID
        let fileData = {title, song_file, episode_id}
        
        this.props.addNewSegment(fileData)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleCancel = (e) => {
        let {cancel} = this.state
        this.props.cancelForm(cancel)
    }
    



    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" autoComplete="off" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />

                <input type="file" accept="audio/*" name="song_file" value={this.state.song_file} onChange={this.handleChange}  />
                <input type="submit" value="Create New Segment" />
                <button onClick={this.handleCancel} >Cancel</button>
                
                

            </form>
        )
    }
   
      
    

}

export default NewSegment



