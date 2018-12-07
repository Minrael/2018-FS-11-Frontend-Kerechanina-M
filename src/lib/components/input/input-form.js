import React, { Component } from 'react';
import submit from "../../../static/mailsend_104372.png"
import geoposition from "../../../static/-place_90615.png"
import attach from "../../../static/attach-rotated_icon-icons.com_68593.png"
import styles from "../../../App.css"
import Message  from '../message-list/message.js';


class InputForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
		input: ''
		
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      event.preventDefault();
      if (this.state.input != '') {
	this.props.updateMessage(this.state.input);
      }
    }



    onInputChange(event) {
      this.setState({input: event.target.value});
    }

    geoposition() {

        function getPosition (opts) {
        	return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, opts);
		});
	};
	return getPosition();

    }


    fillForm() { 
	this.geoposition().then(result => this.setState({value: result.coords.latitude})); 
    }

  /*  onGeopositionChange(event) {
    	this.setState({input: this.geoposition().coords.latitude});
	//this.geoposition().then(result => this.setState({value: result.coords.latitude}));
    }*/


    loadFile(event) { 
	event.preventDefault(); 
	var reader = new FileReader(); 
	var file = event.target.files[0]; 
	reader.readAsDataURL(file); 

	this.props.updateData('File: ' + file.name); 
    }

    render() {

      return (
	
        <form onSubmit={this.onSubmit} id = "input_form">
          	<label>
			<input type="text" name="input" value={this.state.input} onChange={this.onInputChange} placeholder = "Cообщение" />	
		</label> 
	<label htmlFor="submit" className="submitButton"><img src={ submit }></img></label>
	<button id="submit" style={{display: 'none'}} />

        <label htmlFor="attach" className="attachButton"><img src={ attach }></img></label>
	<input type="file" style={{display: 'none'}} id="attach"/>

	<label htmlFor="geoposition" className="geoButton"><img src={ geoposition }></img></label>
	<button id="geoposition" /*onClick={this.onGeopositionChange}*/  style={{display: 'none'}} />

        </form>
	);

	}
}


export default InputForm;
