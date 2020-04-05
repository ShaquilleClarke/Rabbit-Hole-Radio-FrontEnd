import React, { Component } from 'react';
import Segments from './Segments.js'

class NewEpisodeForm extends Component {

    addNewSegment = (segState) => {
        console.log(segState)
    }

    render() {
        return (
            <div>
                <h1>Stuff Goes Here</h1>
                <Segments addNewSegment={this.addNewSegment} />
            </div>
        )
    }
}

export default NewEpisodeForm;