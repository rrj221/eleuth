import React, {Component} from 'react';
import Outbound from './Outbound';
import Inbound from './Inbound';
import Prices from './Prices';


export default class Flight extends Component {
  render() {
    return (
    	<div>
    		This is one Flight
    		<Outbound 
	    		originStation={this.props.outboundInfo.originStation}
				Destinationstation={this.props.outboundInfo.destinationStation}
				departure={this.props.outboundInfo.departure}
				arrival={this.props.outboundInfo.arrival}
				stopsQty={this.props.outboundInfo.stopsQty}
				duration={this.props.outboundInfo.duration}
				journeyMode={this.props.outboundInfo.journeyMode}
				carrierStuff={this.props.outboundInfo.carrierNames}
    		/>
            <Inbound
	        	originStation={this.props.inboundInfo.originStation}
				destinationstation={this.props.inboundInfo.destinationStation}
				departure={this.props.inboundInfo.departure}
				arrival={this.props.inboundInfo.arrival}
				stopsQty={this.props.inboundInfo.stopsQty}
				duration={this.props.inboundInfo.duration}
				journeyMode={this.props.inboundInfo.journeyMode}
				carrierStuff={this.props.inboundInfo.carrierNames}
            />

            <Prices
            	prices={this.props.priceInfo}
            />

            <br/>
    	</div>
    )
  }
}

   //    <div id='IndexPage'>
   //      <Outbound 
			// originStation={this.props.outboundInfo.originStation}
			// Destinationstation={this.props.outboundInfo.destinationStation}
			// departure={this.props.outboundInfo.departure}
			// arrival={this.props.outboundInfo.arrival}
			// stopsQty={this.props.outboundInfo.stopsQty}
			// duration={this.props.outboundInfo.duration}
			// journeyMode={this.props.outboundInfo.journeyMode}
			// carrierStuff={this.props.outboundInfo.carrierNames}
   //      />
   //      <Inbound
   //      	originStation={this.props.inboundInfo.originStation}
			// destinationstation={this.props.inboundInfo.destinationStation}
			// departure={this.props.inboundInfo.departure}
			// arrival={this.props.inboundInfo.arrival}
			// stopsQty={this.props.inboundInfo.stopsQty}
			// duration={this.props.inboundInfo.duration}
			// journeyMode={this.props.inboundInfo.journeyMode}
			// carrierStuff={this.props.inboundInfo.carrierNames}
   //      />
   //      <Prices
   //      	prices={this.props.priceInfo}
   //      />
   //    </div>