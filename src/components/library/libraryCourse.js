import React, { Component } from 'react';

import Icon from './icon';

const Lorem = 'Lorem ipsum doler amet, consectetur adipiscing elit.';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow Component */}
                { Icon('fas fa-plus-circle', 'library-course__action')}
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