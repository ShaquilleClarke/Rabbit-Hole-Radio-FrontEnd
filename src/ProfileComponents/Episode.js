import React, { Component } from 'react'
import Segments from './Segments.js'
import NewSegmentForm from './NewSegmentForm.js'

class Episode extends Component {

    state = {
        segments: []
    }

    addNewSegment = (e) => {
        // let {id} = this.props.episodes
        console.log("clicked")
        
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