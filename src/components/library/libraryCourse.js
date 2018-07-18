import React, { Component } from 'react';

import Icon from './icon';
import Arrow from './arrow';
import Action from './action';

const Lorem = 'Lorem ipsum dolor sit amet, cum ornare, mi sollicitudin wisi elit pellentesque per netus, aliquet phasellus, fermentum est vestibulum vitae, mollis consectetuer. Sem venenatis id ullamcorper donec parturient faucibus, ut consectetuer lectus vitae sagittis nullam, iaculis suspendisse.';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <div className="library-course__title-wrapper">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>{Lorem}</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;
export { Lorem };