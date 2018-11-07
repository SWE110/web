import React, { Component } from 'react';
import './TopButton.css';

class TopButton extends React.Component {
  scrollToTop () {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <button title='Back to top' class='scroll' onClick={ () => { this.scrollToTop(); }}>
        <span class='arrow-up'></span>
      </button>

    );
  }
}
export default TopButton;
