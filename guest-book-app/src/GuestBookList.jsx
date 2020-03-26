import React, { Component } from 'react'

export default class GuestBookList extends Component {
    render() {
        return (
            <div className ="NoRsvp">
                <h1>Waiting for a Response</h1>
                {
                    this.props.guestBookList.map((guest,index)=>{
                        return(<div key={index}>
                            <p>Name: {guest.name}</p>
                            <p>Phone: {guest.phone}</p>
                        </div>)
                    }
                    
                    )}
            </div>
        )
    }
}
