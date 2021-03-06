import React, { Component } from "react";

export default class GuestBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      checked: false,
      guestBookList:[],
      guestBookListRsvp:[]
    };
  }
//   Capturing values from input fields and setting their states 
handleChange =(event)=>{
    if (event.target.name ==="name"){
        this.setState({name:event.target.value})
    }
    if (event.target.name ==="phone"){
        this.setState({phone:event.target.value})
    }
    if(event.target.name ==="rsvp"){
        this.setState({checked:event.target.checked})
    }
}
//Once the submit button is clicked. It push name and phone to specific list given if the person rsvp or not
handleSubmission =(event) =>{
    if (this.state.rsvp ===true){
        this.state.guestBookListRsvp.push({name:this.state.name,phone:this.state.phone})
    }
    else{
        this.state.guestBookList.push({name:this.state.name,phone:this.state.phone})
    }
    this.setState({guestBookList:this.state.guestBookList})
    this.setState({guestBookListRsvp:this.state.guestBookListRsvp})
    event.preventDefault();
    console.log(this.state)
    this.setState({
        name:"",
        phone:"",
        rsvp:!this.state.checked
    })
     this.props.addGuestList(this.state.guestBookList,this.state.guestBookListRsvp)
    // this.props.addGuest(this.state)
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
                  <input type="checkbox" name="rsvp" id="rsvp" value = {this.state.checked} onClick = {this.handleChange}/>
              </p>
              < button onClick = {this.handleSubmission} type="submit">Submit</button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
