import React, { Component } from 'react';


class NewEpisodeForm extends Component {

    state = {
        title: "",
        air_date: ""
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/episodes', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${this.props.token}`
            },
            body: JSON.stringify({
                title: this.state.title,
                air_date: this.state.air_date
            })
        })
        .then(r => r.json())
        .then((newEp) => {
            if (newEp.id) {
                this.props.addNewEpisode(newEp)
            } else {
                console.log("OHHHHH NOOOOO")
            }
        })
    }

    

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label> Create Episode   </label>

            
            <input type="text" autoComplete="off" name="title" placeholder="episode-title" value={this.state.title} onChange={this.handleChange} />
            <input type="date" name="air_date" value={this.state.air_date} placeholder="air-date" min="2018-04-01" max="2021-01-01" onChange={this.handleChange} />
            <input type="submit" value="Create New Episode" />
        </form>

        )
    }
}

export default NewEpisodeForm;