import React from 'react';
import  NewsStructure from './newsStructure.jsx';


var NewsContainer = React.createClass({


	render:function(){
		var displayNewsItem = function(item,index){
			return <NewsStructure url={item.url} key={index} src={item.src} description={item.description} title={item.title} pdate={item.pdate} author={item.author} />
		};
		
		return(

			<div>

			{this.props.newsItem.map(displayNewsItem)}

			</div>


			)
	}
})

export default  NewsContainer;