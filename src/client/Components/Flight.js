import React, {Component} from 'react';
import Outbound from './Outbound';
import Inbound from './Inbound';
import Prices from './Prices';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

export default class Flight extends Component {
  render() {
    return (

<div>

  <div className="panel panel-primary">
    <div className="panel-heading">
      <div className ="panel-body fixed-panel">
  

            	<div className="row">

                <div className="col-sm-4" id="outbound">
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
                </div>

                <div className="col-sm-4" id="inbound">
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
                 </div>     

                 <div className="col-sm-4" id="prices">
                     <Prices
                      	prices={this.props.priceInfo}
                      />
                  </div>
                     <br/>
    	       </div>
      </div>

  </div>

  </div>
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


