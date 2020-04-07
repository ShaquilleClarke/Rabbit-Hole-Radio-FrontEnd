import React, { Component } from 'react'


class NewSegment extends Component {

    state = {
        title: "",
        cancel: false,
        song_file: []
    }

    handleSubmit = (fileData) => {
        console.log(fileData)
        // this.props.addNewSegment()
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
            <form>
                <input type="text" autoComplete="off" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
                <button onClick={this.handleCancel} >Cancel</button>

            </form>
        )
    }
}

export default NewSegment