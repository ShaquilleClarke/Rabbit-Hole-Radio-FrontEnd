import React, { Component } from 'react'
import Segments from './Segments.js'
import NewSegmentForm from './NewSegmentForm.js'

class Episode extends Component {

    state = {
        segments: [],
        clicked: false
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

    renderSegment = (e) => {
        this.setState({
            clicked: !false
        })
    }




    render() {
        let {title, air_date} = this.props.episodes
        // let {segment} = this.state.segments

        let {clicked} = this.state
        // const segConditional = {clicked !== false ? (
        //     <div>
        //         <NewSegmentForm addNewSegment={this.addNewSegment} />
        //         {/* <div>
        //             {segment.map(segObj => {
        //                 return <Segments key={segObj.id} segments={segObj} />
        //             })}
        //         </div> */}
        //     </div>) : null}
        return (
            <div>
                <li>{title} - {air_date}</li>
                <button onClick={this.renderSegment} >Delete Episode</button>
                <button onClick={this.linkToForm} > Add Segment</button>
                <div>
                    <NewSegmentForm addNewSegment={this.addNewSegment} />
                    {/* <div>
                        {segment.map(segObj => {
                            return <Segments key={segObj.id} segments={segObj} />
                        })}
                    </div> */}
                </div>


            </div>
                
        )
    }
}

export default Episode