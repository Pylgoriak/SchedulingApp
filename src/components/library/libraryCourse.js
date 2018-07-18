import React, { Component } from 'react';

const Lorem = 'Lorem ipsum doler amet, consectetur adipiscing elit.';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon Component */}
                {/* arrow Component */}
                {/* action Button Component */}
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