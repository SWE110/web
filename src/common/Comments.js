import React, {Component} from 'react';

export class PostComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  userName = 'abhithube';
  commentsArray = [];

  handleClick(event) {
    event.preventDefault();
    if (this.state.comment !== '') this.commentsArray.push(this.state.comment);
    this.setState({comment: ''});
  }

  render() {

    let emptyComments = "Nothing to see here...";

    if (this.commentsArray.length) emptyComments = "";

    const records = this.commentsArray.map((item) =>
      <div style={{borderBottom: '1px solid black'}}>
        <p style={{width: '400px', fontSize: '18px', fontWeight: 'bold'}}>{this.userName}</p>
        <p style={{width: '800px', fontSize: '14px', margin: '20px'}}>{item}</p>
      </div>
    );


    return(
      <form style={{margin: '10px'}}>
        <h1>Comments</h1>
        <div>
          {emptyComments}
          {records}
        </div>
        <div>
          <br/>
          <br/>
          <p>Comment:
            <br/>
            <input value={this.state.comment} onChange={e => this.setState({comment: e.target.value})}/>
          </p>
          <button onClick={this.handleClick.bind(this)}>Post Comment</button>
        </div>
      </form>
    )
  }
}

export default PostComment;