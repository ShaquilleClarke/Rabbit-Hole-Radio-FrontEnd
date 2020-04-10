import React, { Component } from 'react'






class NewSegment extends Component {

    state = {
        cancel: false,
        video: {},
        title: ""
    }

    componentDidMount() {
        this.setState({
            video: {},
            title: ""
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        const {video, title} = this.state
        // console.log(video)
        form.append('video', video)
        form.append('episode_id', this.props.epID)
        form.append('title', title)
        fetch('http://localhost:3000/segments', {
            method: "POST",
            body: form
        })
        .then(r => r.json())
        .then((fileData) => {
            this.props.addNewSegment(fileData)
        })



    }

    
    
    

    onUpload = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    textOnChange = (e) => {
        e.persist()
        
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
        let {title} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                
                <input type="text" name="title" value={title}  placeholder="title" onChange={this.textOnChange} />
                <input type="file" name="video" accept="video/*" onChange={this.onUpload}  />
                <input type="submit" value="Create New Segment"  />
                <button onClick={this.handleCancel} >Cancel</button>

            </form>
                
        )
    }
                

           
   
      
    

}



export default NewSegment



