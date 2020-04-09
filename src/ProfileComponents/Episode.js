import React, { Component } from 'react'
// import Segments from './Segments.js'
import NewSegmentForm from './NewSegmentForm.js'

class Episode extends Component {

    state = {
        segments: [],
        clicked: false
    }

    componentDidMount() {
        // fetch to episodes url and set state to contain episodes with segments
    }

    addNewSegment = (fileData) => {
        fetch('http://localhost:3000/segments', {
            method: "POST",
            body: JSON.stringify(fileData)
        })
        .then(r => r.json())
        .then(console.log)
        
    }

    handleDelete = (e) => {
        let {id} = this.props.episodes
        this.props.deleteEpisode(id)
    }

    renderForm = (e) => {
        this.setState({
            clicked: !false
        })
    }

    cancelForm = (cancel) => {
        this.setState({
            clicked: cancel
        })
    }

    




    render() {
        let {title, air_date} = this.props.episodes
        let {segment} = this.state.segments

        let {clicked} = this.state

        const segConditional = clicked === !false ? (
            <div>
                <br/>
                <NewSegmentForm epID={this.props.iD} addNewSegment={this.addNewSegment} cancelForm={this.cancelForm} />
                {/* <div> */}
                    {/* {segment.map(segObj => {
                        return <Segments key={segObj.id} segments={segObj} /> */}
                    {/* })} */}
                {/* </div> */}
            </div>) : null
            
        return (
            <div>
                <li>{title} - {air_date}</li>
                <button onClick={this.renderForm} > Add Segment</button>
                <button onClick={this.handleDelete} >Delete Episode</button>
                {segConditional}
            </div>


                
        )
    }
}

export default Episode