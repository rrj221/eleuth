import React, {Component} from 'react';


export default class Price extends Component {
  render() {
    return (
      <div id='IndexPage'>
      	<div>
      		Agent Name: {this.props.agentName}
      	</div>
      	<img src={this.props.image}/>
      	<div>
        	Price: {this.props.price}
        </div>
        <a href={this.props.link}>Link</a>
        <br/>
      </div>
    )
  }
}