import React, { Component } from 'react'

export default class GuestBookListRSVP extends Component {
    render() {
        return (
            <div className="Rsvp">
                <h1>RSVP'd</h1>
                {
                    this.props.guestBookListRsvp.map((guest,index) =>{
                        return(
                            <div key = {index}>
                                <p>Name: {guest.name}</p>
                                <p>Phone: {guest.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
