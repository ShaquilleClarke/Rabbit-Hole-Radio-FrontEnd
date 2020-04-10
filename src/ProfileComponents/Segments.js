import React, { Component } from 'react'

class Segments extends Component {

    // state = {
    //     segments: []
    // }

    handleDelete = (e) => {
        
        let {id} = this.props.segment
        console.log(id)
        this.props.deleteSegment(id)
    }

    render() {
        const renderDelete = <button onClick={this.handleDelete} >Delete Segment</button>
        let {title} = this.props.segment

        return (

            <div>
                <ul>

                    <li>{title} {renderDelete} </li>
                </ul>
                
                
            </div>
                    
        )
    }
}

export default Segments