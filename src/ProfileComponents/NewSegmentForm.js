import React, { Component } from 'react'






class NewSegment extends Component {

    state = {
        cancel: false,
        video: {},
        title: "",
        
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
        console.log(form)
        // debugger
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

    clearText = () => {
        this.setState({
            title: ""
        })
    }

    clearEverything = (e) => {
        e.preventDefault()
        this.setState({
            video: {},
            title: ""
        })
    }
    
   


    render() {

        

        let {title} = this.state
        return (
            <form align="center" onSubmit={this.handleSubmit} >
                
                <input type="text" name="title" value={title}  placeholder="title" onChange={this.textOnChange} onDoubleClick={this.clearText} />
                <input type="file" name="video" accept="video/*" onChange={this.onUpload} onDoubleClick={this.clearEverything} />
                <input type="submit" value="Create New Segment"  />
                <button onClick={this.handleCancel} >Close</button>

            </form>
                
        )
    }
                

           
   
      
    

}



export default NewSegment



