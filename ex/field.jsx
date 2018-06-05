import React from 'react'


export default class Field extends React.Component {
   constructor(props) {
   	  super(props)
   	  this.state = {value: this.props.initialValue}
   	  this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event) {
   	this.setState({value: event.target.value})
   	console.log(this);
   	console.log(event)
   }

   render(){
   	return (
   		<div>
      <label> {this.state.value}</label><br/>
      <input onChange={this.handleChange} value={this.state.value}/>
   	   </div>
   	 )
   }
}