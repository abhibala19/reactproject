import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:"",
             comments:"",
             topic:"react"
        }
    }
    handleUserNameChange=(event) =>{
        this.setState({
            userName:event.target.value
        })
    }
    handleCommentChange=(event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event =>{
        alert(`${this.state.userName} ${this.state.comments}${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    UserName
                </label>
                <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="javaScript">Js</option>
                    <option value="angular">Angular</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form