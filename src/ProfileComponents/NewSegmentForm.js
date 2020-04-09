import React, { Component } from 'react'






class NewSegment extends Component {

    state = {
        cancel: false,
        video: {}
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        const {video} = this.state
        // console.log(video)
        form.append('video', video)
        form.append('episode_id', this.props.epID)
        fetch('http://localhost:3000/segments', {
            method: "POST",
            body: form
        })
        .then(r => r.json())
        .then(console.log)
        // this.props.addNewSegment(fileData)


    }

    
    
    

    handleChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    handleCancel = (e) => {
        let {cancel} = this.state
        this.props.cancelForm(cancel)
    }
    



    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                
                <input type="file" name="video" accept="video/*" onChange={this.handleChange}  />
                <input type="submit" value="Create New Segment" />
                <button onClick={this.handleCancel} >Cancel</button>

            </form>
                
        )
    }
                

           
   
      
    

}

export default NewSegment



