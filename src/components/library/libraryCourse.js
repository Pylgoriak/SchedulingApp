import React, { Component } from 'react';

import Icon from './icon';
import Arrow from './arrow';
import Action from './action';

const Lorem = 'Lorem ipsum dolor sit amet, cum ornare, mi sollicitudin wisi elit pellentesque per netus, aliquet phasellus, fermentum est vestibulum vitae, mollis consectetuer. Sem venenatis id ullamcorper donec parturient faucibus, ut consectetuer lectus vitae sagittis nullam, iaculis suspendisse.';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="libraryCourse">
                <div className="libraryCourse__title-wrapper">
                    <label className="libraryCourse__title">{this.props.title}</label>
                    { Icon('fas fa-check', 'libraryCourse__icon') }
                </div>
                <Arrow className="libraryCourse__arrow"/>
                <Action className="libraryCourse__action"/>
                <div className="libraryCourse__description">
                    <label>Course Description</label>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;
export { Lorem };