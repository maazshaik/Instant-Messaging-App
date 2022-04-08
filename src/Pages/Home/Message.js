import React from 'react';
export class Message extends React.Component {
    render() {
        return (
            <div className="message">

                <div><b>{this.props.sender}</b></div>

                <span>{this.props.text}</span>

            </div>
        )
    }
}