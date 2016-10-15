import React, {Component} from 'react';
import Price from './Price';


export default class Prices extends Component {
  render() {
  	const { prices } = this.props;
  	console.log(prices);
    return (
      <div>
        Prices
		<ul className='list-group-item'>
		  {
			prices.map((agent) =>
			  <Price
				agentName={agent.agentName}
				price={agent.price}
				image={agent.image}
				link={agent.link}
			  />
			)
		  }
		</ul>

      </div>
    )
  }
}

  	// const { prices } = this.props;
  	// console.log(prices);
		 //  {
			// prices.map((agent) =>
			//   <Price
			// 	agentName={agent.agentName}
			// 	price={agent.price}
			// 	image={agent.image}
			// 	link={agent.link}
			//   />
			// )
		 //  }