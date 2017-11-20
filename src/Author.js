import React, {Component} from 'react';


class Author extends Component {

    fonctionAuClic() {
      alert("it's Me Mario !");
    }

  render() {
    return(
      <div onClick={this.fonctionAuClic.bind(this)}>
	      {this.props.name}
      </div>);
  }
}

export default Author;
