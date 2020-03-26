import React, { Component } from "react";
import GuestBookForm from "./GuestBookForm";
import GuestBookList from "./GuestBookList";
import GuestBookListRSVP from "./GuestBookListRSVP";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        guestBookList:[],
        guestBookListRsvp:[]
    };
  }
  addGuest = (updatedGuestList, updatedGuestListRsvp) =>{
      this.setState({guestBookList:updatedGuestList,guestBookListRsvp:updatedGuestListRsvp})
      console.log(this.state);
      
  }

  render() {
      
    return (
      <div className="container">
        <h1>Guest List Manager</h1>
        <GuestBookForm addGuestList = {this.addGuest}/>
        <GuestBookList guestBookList= {this.state.guestBookList} />
        <GuestBookListRSVP guestBookListRsvp = {this.state.guestBookListRsvp} />
      </div>
    );
  }
}
