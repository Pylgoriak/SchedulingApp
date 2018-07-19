import React, { Component } from 'react';

const Lorem = 'Lorem ipsum dolor sit amet, cum ornare, mi sollicitudin wisi elit pellentesque per netus, aliquet phasellus, fermentum est vestibulum vitae, mollis consectetuer. Sem venenatis id ullamcorper donec parturient faucibus, ut consectetuer lectus vitae sagittis nullam, iaculis suspendisse.';

class ScheduleCourse extends Component {
    render() {
        return(
            <div className="scheduleCourse">
                <label>{ this.props.title }</label>
            </div>
        )
    }
}

export default ScheduleCourse;
export { Lorem };