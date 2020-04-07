import React, { Component } from 'react'
import Segments from './Segments.js'
import NewSegmentForm from './NewSegmentForm.js'

class Episode extends Component {

    state = {
        segments: []
    }

    componentDidMount() {
        // fetch to episodes url and set state to contain episodes with segments
    }

    addNewSegment = (e) => {
        // let {id} = this.props.episodes
        //fetch to  segment url and return segment
        console.log("clicked")
        
    }

    handleDelete = (e) => {
        let {id} = this.props.episodes
        this.props.deleteEpisode(id)
    }

    linkToForm = (e) => {
        console.log('clicked')
    }

    render() {
        let {title, air_date} = this.props.episodes
        // let {segment} = this.state.segments
        return (
            <div>
                <li>{title} - {air_date}</li>
                <button onClick={this.linkToForm} > Add Segment</button>
                <br />
                <button onClick={this.handleDelete} >Delete Episode</button>
                {/* <div>
                    {segment.map(segObj => {
                        return <Segments key={segObj.id} segments={segObj} />
                    })}
                </div> */}

                <NewSegmentForm addNewSegment={this.addNewSegment} />
            </div>
                
        )
    }
}

export default Episode