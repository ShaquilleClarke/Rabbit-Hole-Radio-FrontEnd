import React, { Component } from 'react'


class NewSegment extends Component {

    state = {
        title: "",
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



    render() {
        return (
            <form>
                <input type="text" autoComplete="off" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />

            </form>
        )
    }
}

export default NewSegment