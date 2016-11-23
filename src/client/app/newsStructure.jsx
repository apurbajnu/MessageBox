import React from 'react';

var NewsStructure = React.createClass({

	render:function(){

		return(

		<div className="container">
			<div className="img-conainer">
			<a href={this.props.url}><img className="image" src={this.props.src} alt={this.props.title}/></a>
			</div>

			<a href={this.props.url}><h3 className="title">{this.props.title}</h3></a>
			<span className="metadata">{this.props.pdate.substring(0, 10)}</span>
			<span className="authorname">{this.props.author}</span>
			
			<p className="description">{this.props.description}</p>
			
		</div>


			)
	}
})

export default  NewsStructure;