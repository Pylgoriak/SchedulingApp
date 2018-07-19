import React, { Component } from 'react';

class ProgressTracker extends Component {
  render() {
    return (
      <div className="progressTracker">
        <label className="progressTracker__label">Progress Tracker</label>
        <div className="progressTracker__percentage">
            0%
        </div>
      </div>
    );
  }
}

export default ProgressTracker;