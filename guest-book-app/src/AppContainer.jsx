import React, { Component } from "react";
import GuestBookForm from "./GuestBookForm";
import GuestBookList from "./GuestBookList";
import GuestBookListRSVP from "./GuestBookListRSVP";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Guest List Manager</h1>
        <GuestBookForm />
        <GuestBookList />
        <GuestBookListRSVP />
      </div>
    );
  }
}
