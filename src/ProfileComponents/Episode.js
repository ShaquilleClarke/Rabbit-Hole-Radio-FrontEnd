import React, { Component } from 'react'
import Segments from './Segments.js'
import NewSegmentForm from './NewSegmentForm.js'





class Episode extends Component {

    state = {
        segments: [],
        clicked: false
    }

    
    componentDidMount() {
        fetch('http://localhost:3000/segments')
        .then(r => r.json())
        .then(segments => {


            this.setState({
                segments: segments
            })
        })
    }
    

    

    addNewSegment = (newSegment) => {
        this.setState({
            segments: [...this.state.segments, newSegment]
        })
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

    deleteSegment = (id) => {
        fetch(`http://localhost:3000/segments/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(notThis => {
            
            let filteredArray = this.state.segments.filter(keepThese => {
                return keepThese.id !== notThis.id 
            })
            
            this.setState({
                segments: filteredArray
            })
        })
    }


    




    render() {
        let {title, air_date} = this.props.episodes
        
        let {clicked} = this.state
       

        
        

        const segConditional = clicked === !false ? (
            <div>
                <br/>
                <NewSegmentForm epID={this.props.iD} addNewSegment={this.addNewSegment} cancelForm={this.cancelForm} />
            </div>) : null
    

        

        const renderDelete = <button onClick={this.handleDelete} >Delete Playlist</button>
        
        const renderAdd =  <button onClick={this.renderForm} > Add Content</button>

        console.log(this.state.segments)

        return (
            <div>
                <h3>{title} - {air_date} {renderAdd} {renderDelete} </h3> 
                <div>
                    {this.state.segments.map(segObj => {
                        return <Segments key={segObj.id} segment={segObj} deleteSegment={this.deleteSegment} />
                        })}
                                
                </div>
                {segConditional}
            </div>
                

                        

                


                
        )
    }
}

export default Episode