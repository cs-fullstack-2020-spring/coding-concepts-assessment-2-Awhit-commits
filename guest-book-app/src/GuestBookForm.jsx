import React, { Component } from "react";

export default class GuestBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      rsvp: false
    };
  }
handleChange =(event)=>{
    if (event.target.name ==="name"){
        this.setState({name:event.target.value})
    }
    if (event.target.name ==="phone"){
        this.setState({phone:event.target.value})
    }
    if(event.target.name ==="rsvp"){
        this.setState({rsvp:true})
    }
}
handleSubmission =(event) =>{
    event.preventDefault();
    console.log(this.state)
}
  render() {
    return (
      <div className ="form">
        <form action="">
          <div>
            <fieldset>
              <legend>Add a New Guest</legend>
              <p>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="phone">Phone Number: </label>
                <input type="tel" name="phone" id="phone" value = {this.state.phone} onChange = {this.handleChange}/>
              </p>
              <p>
                  <label htmlFor="rsvp">RSVP</label>
                  <input type="checkbox" name="rsvp" id="rsvp" value = {this.state.rsvp} onChange = {this.handleChange}/>
              </p>
              < button onClick = {this.handleSubmission} type="submit">Submit</button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
