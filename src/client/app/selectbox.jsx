import React from 'react';

var ApSelect = React.createClass({

	getInitialState:function(){

		return{
			selectValue:''
		}

	},

	changeValue:function(e){

		this.setState({selectValue:e.target.value});

	},

	SendValue:function(e){
		e.preventDefault();
		this.props.SelectedValue(this.state.selectValue);

	},


	render:function(){

		var displayOptions = function(item,index){
			return <option key={index} value={item.section}>{item.section.toUpperCase()}</option>
		};

		return(

			<form className="NewsBox" onSubmit={this.SendValue}>
				<select  value={this.state.selectValue} onChange={this.changeValue}>
				 <option value=''>select</option>
				 {this.props.items.map(displayOptions)}
				</select>
				<button>submit</button>
			</form>


			)
	}
})

export default  ApSelect;