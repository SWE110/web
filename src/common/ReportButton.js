import React from 'react'

class ReportButton extends React.Component {
  report(){
    <h1> Report </h1>
  }

  render() {
    return (
      <button title='Report' class='report' onClick={ () => this.report()}> </button>
    )
  }
}

export default ReportButton
