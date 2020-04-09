import React, { Component } from 'react'






class NewSegment extends Component {

    state = {
        cancel: false,
        song_file: []
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        const {song_file} = this.state
        // console.log(song_file)
        formData.append('file', song_file)
        fetch('http://localhost:3000/segments', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'content-type': 'multipart/form-data'
            },
            body: formData
        })
        .then(r => r.json())
        .then(console.log)
        // this.props.addNewSegment(fileData)


    }

    
    
    

    handleChange = (e) => {
        
        this.setState({
            song_file: e.target.files[0]
        })
    }

    handleCancel = (e) => {
        let {cancel} = this.state
        this.props.cancelForm(cancel)
    }
    



    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                
                <input type="file" accept="audio/*" name="song_file"  onChange={this.handleChange}  />
                <input type="submit" value="Create New Segment" />
                <button onClick={this.handleCancel} >Cancel</button>

            </form>
                
        )
    }
                

           
   
      
    

}

export default NewSegment



