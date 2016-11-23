import React from 'react';
import ReactDOM from 'react-dom';
import  ApSelect from './selectbox.jsx';
import  NewsContainer from './newscontainer.jsx';
import $ from 'jquery'; 


var Counter = React.createClass({

	getInitialState:function(){

		return{
			Sections:
			[{"section":"World"},
					{"section":"U.S."},
					{"section":"Business"},
					{"section":"Opinion"},
					{"section":"Science"},
					{"section":"Health"},
					{"section":"Sports"},],

		newsItem:[]

		}
	
	},

	arrayToObject:function(){

	},

	

	ajaxSystem: function(value){

		var url = 'http://api.nytimes.com/svc/news/v3/content/all/'+value+'/.json?api-key=5afb743aae0220e27d8f6ccff3115c0a%3A3%3A72410454';


		 $.getJSON(url, function(data){

			
			 var self = this;
			

			  var newsItems = data.results.map(function(item,index){

								  	return{
								  		title:item.title,
								  		url: item.url,
								  		src: item.thumbnail_standard,
								  		description:item.abstract,
								  		pdate: item.published_date,
								  		author: item.byline
								  	}

           						});

			   this.setState({newsItem: newsItems});

           
         
           }.bind(this));
		


	},



	render:function(){
		return(
		 <div>
			<ApSelect  SelectedValue={this.ajaxSystem} key={this.state.Sections.id} items={this.state.Sections}/>
			
			 <NewsContainer  newsItem={this.state.newsItem} />
		</div>
		);
	}
})

ReactDOM.render( <Counter/>,document.getElementById('app'));
