import React, {Component} from 'react';


export default class Outbound extends Component {
  render() {
    return (
      <div className='outbound'>
        <h5>Outbound Info</h5>
        <ul>
        	<li>Desitation Station: {this.props.DesitationStation}</li>
        	<li>Departure: {this.props.Arrival}</li>
        	<li>Arrival: {this.props.arrival}</li>
        	<li>Carrier Name: {this.props.carrierStuff[0].name}</li>
        	<img src={this.props.carrierStuff[0].imgUrl}/>
        	<li>Duration: {this.props.duration}</li>
        	<li>Origin Station: {this.props.originStation}</li>
        	<li>Stops: {this.props.stopsQty}</li>
        </ul>

      </div>
    )
  }
}