import React, { Component } from "react";
import GuestBookForm from "./GuestBookForm";
import GuestBookList from "./GuestBookList";
import GuestBookListRSVP from "./GuestBookListRSVP";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name:"",
        phone:"",
        rsvp:false,
        guestBookList:[],
        guestBookListRsvp:[]
    };
  }
  //Callback function to update guest list and pass down the child components respectively
  addGuestList = (updatedGuestList,updatedGuestListRsvp) =>{
      this.setState({guestBookList:updatedGuestList,guestBookListRsvp:updatedGuestListRsvp})
    // this.setState({name:updatedGuest.name, phone:updatedGuest.phone,rsvp:updatedGuest.rsvp})
    // if (this.state.rsvp ===true){
    //     this.state.guestBookListRsvp.push({name:this.state.name,phone:this.state.phone})
    // }
    // this.setState({guestBookListRsvp:this.state.guestBookListRsvp})
    // else{
    //     this.state.guest
    // }
      
      
  }
//   componentDidUpdate(){
//       console.log(`this.state component did update`);
//       console.log(this.state);
//   }

  render() {
      
    return (
      <div className="container">
        <h1>Guest List Manager</h1>
        <GuestBookForm addGuestList = {this.addGuestList}/>
        <GuestBookList guestBookList= {this.state.guestBookList} />
        <GuestBookListRSVP guestBookListRsvp = {this.state.guestBookListRsvp} />
      </div>
    );
  }
}
